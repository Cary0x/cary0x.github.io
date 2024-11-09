export default function LaunchBar() {
  const renderResults = (data) => (
    <div className="flex flex-col space-y-2">
      {data.error ? <span className="text-red-500">{data.error}</span> : <></>}
    </div>
  );

  return (
    <div className="flex flex-col items-center p-8">
      <LaunchComponent
        searchLabel="Enter Launch Code: "
        renderResults={renderResults}
      />
    </div>
  );
}

import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import styles from "./FetchData.module.css";

const fakeErrors = [
  "Error: Password rejected due to temporal inconsistency.",
  "Access denied: Please enable cookies and try again.",
  "Authentication failed: Value cannot be null (parameter 'entropy').",
  "Login failed: Unexpected success state.",
  "Oops! Looks like your password was too symmetrical.",
  "Verification error: Please enter a less guessable password.",
  "Error 420: Password too chill.",
  "Mismatch detected: Try reversing your keyboard layout.",
  "Login blocked: Too many correct attempts.",
  "Input rejected: Please use at least one character from Wingdings.",
  "Error: Your password matches Pauly's. That’s awkward.",
  "Authentication error: Password too emotionally distant.",
  "Login failed: Password strength exceeds system tolerance.",
  "Access denied: Too soon since your last successful login.",
  "Error: Password does not match your aura.",
  "System alert: Keyboard latency outside acceptable range.",
  "Denied: This feels like a bot. Are you a bot?",
  "Error: Password contains too many metaphors.",
  "Authentication blocked: This feels... wrong. Try again.",
  "Login error: Try yelling your password out loud.",
  "Failure: Password almost worked. Very close.",
  "Authentication halted: Unclear intent detected.",
  "Oops: Something went right. That’s not allowed.",
  "Login failed: Wrong password. Or is it?",
  "Error: The password field is not emotionally ready.",
  "Validation failed: Ambiguous credentials detected.",
  "Access denied: Too many letters that look like numbers.",
  "Error 893: Recursive login detected.",
  "Authentication loop detected. Please unplug and try again.",
  "Your password was correct, but something went wrong anyway.",
  "Security mismatch: Did you blink while typing?",
  "Error: Password feels artificially intelligent.",
  "Login error: Our server is reconsidering its choices.",
  "Warning: Too many secure thoughts at once.",
  "Password error: Conflict with parallel session in timeline B.",
  "Access denied: Password shares a birthday with root account.",
  "System timeout: Please don't rush the machine.",
  "Authentication rejected: Try entering with more confidence.",
  "Login blocked: We're just not feeling it right now.",
  "Failure: Password spelled correctly but emotionally incorrect.",
  "Error: Excessive certainty detected in user input.",
  "Access failure: Something went slightly too well.",
  "Alert: Security kernel panicked from unexpected nostalgia.",
  "Denied: Password looks like an anagram of itself.",
  "Login failed: Try less hard.",
  "Authorization issue: Try blinking in Morse code.",
  "Oops: Your password was too predictive.",
  "Input rejected: Too much emotional baggage.",
  "Error 502ish: Password flew too close to the sun.",
  "Authentication refused: Try re-entering using only good vibes.",
  "Login blocked: System sensed you hesitated.",
  "Access error: Still buffering human intent.",
  "Failure: Our intern tripped over the login cable.",
  "Security violation: Password reminded system of its ex.",
  "Password not accepted: Try one with more whimsy.",
  "Input error: Unexpected semicolon in your aura.",
  "Error: Password resembles admin's coffee order.",
  "Access denied: You seem too sure of yourself.",
  "Authorization failed: Something about your vibe.",
  "Error: Password cannot begin with unresolved trauma.",
  "Mismatch: Cosmic rays interfered with authentication.",
  "Login failure: We've seen this password in a dream.",
  "Access terminated: We just don’t like your tone.",
  "Authentication interrupted: Birds aren’t real.",
  "Oops: Password conflicted with your horoscope.",
  "Error 8008135: Nice try.",
  "Login blocked: Try again, but this time with feeling.",
  "System error: Credentials too spicy.",
  "Verification failed: Subtle arrogance detected.",
  "Login error: Password not recognized in this dimension.",
  "Access denied: Your password might be haunted.",
  "Security warning: Login attempt felt sarcastic.",
  "Error: Password echoed too loudly in the void.",
  "Oops! That wasn’t it, but it was beautiful.",
  "Login failed: Password tries too hard to be strong.",
  "Authentication issue: We forgot what we were checking.",
  "Access refused: Password was mostly correct, which is worse.",
  "Error: System prefers jazz hands with passwords.",
  "Failure: You made the password too passwordy.",
  "Login blocked: Try entering it as a haiku.",
  "Denied: Your password summoned a minor demon.",
  "Authentication failed: Keyboard too judgmental.",
  "System warning: Password structure appears non-Euclidean.",
  "Password error: Try reversing polarity of the input.",
  "Access denied: Too many truths in one place.",
  "Login blocked: That password has already been retired.",
  "Authentication error: Try whispering it next time.",
  "Error: Password resonates on the wrong frequency.",
  "Failure: Something went right, and that's suspicious.",
  "Login halted: System is still laughing from your last attempt.",
  "Access denied: Password contained forbidden knowledge.",
  "Warning: Login attempt tripped an existential alarm.",
  "Authentication delayed: We’re consulting the stars.",
  "Login error: Password was too much, too soon.",
  "Password rejected: Too quantum to verify.",
  "Access denied: We can’t tell if that was brilliant or broken.",
  "Failure: Password format is technically correct, but cursed.",
  "Error: Your password matched the boss key sequence.",
  "Login failed: Session expired before it began.",
  "Warning: Input reminded system of a lost childhood memory.",
  "Security issue: You’re overqualified for this login.",
  "Authentication refused: Try dancing next time.",
  "Access blocked: Unexpected sincerity detected.",
  "Failure: Too many metaphysical implications.",
  "Login error: Password oscillated during verification.",
  "Denied: It just doesn’t feel like a password.",
  "Authentication glitch: Syntax emotionally invalid.",
  "Error: Your password was accepted but not embraced.",
  "Login blocked: Session initiated during retrograde.",
  "System rejection: Password lacks poetic nuance.",
  "Failure: We’re philosophically unprepared for that password.",
  "Error: Session interrupted by existential dread.",
  "Access denied: Password too chronologically complex.",
  "Authentication error: That wasn’t even a bad attempt, just odd.",
  "Login failed: Password conflicted with sacred geometry.",
  "Alert: Input gave us goosebumps, and not in a good way.",
  "System halted: Password was in a forbidden dialect.",
  "Failure: Password suggests a deeper truth we’re not ready for.",
  "Login error: Code smells detected in your typing rhythm.",
  "Access blocked: System’s therapist advised against it.",
  "Authentication refused: Try logging in with intention.",
  "Error: Your password activated Schrödinger's firewall.",
  "Warning: The password field is processing a breakup.",
  "Login failed: Credentials too self-aware.",
  "Authentication aborted: Password predicted the future.",
  "System rejected: We simply don't trust your keystrokes.",
  "Access denied: We lost confidence halfway through.",
  "Error: Password passed all checks but didn’t sit right.",
  "Failure: Input implies you've been here before... haven't you?",
  "Authentication blocked: Password contained a recursive loop.",
  "Login failed: Something about that felt scripted.",
  "Alert: System believes your password lied.",
  "Access terminated: Try it backwards.",
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function LaunchComponent({
  apiUri,
  searchLabel,
  renderResults,
  minLength = 6,
  maxLength = 20,
  localStorageName = "launchcode",
}) {
  const [query, setQuery, isHydrated] = useLocalStorage(localStorageName, "");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const isDisabled =
    !isHydrated ||
    loading ||
    query.length < minLength ||
    query.length > maxLength;

  const fetchData = async () => {
    sendUniqueGTMEvent("fake_pw_entry", {
      fakepw: query,
    });
    setQuery("");
    setResult(null);
    if (query.length < minLength || query.length > maxLength) {
      setResult({
        error: `Input must be between ${minLength} and ${maxLength} characters.`,
      });
      return;
    }

    setLoading(true);
    let delayTime = Math.ceil(Math.random() * 8 * 1000);

    try {
      const response = await delay(delayTime);
      setResult({
        error: fakeErrors[Math.floor(Math.random() * fakeErrors.length)],
      });
      setLoading(false);
    } catch (error) {
      setResult({ error: "Failed to fetch data" });
    }
  };

  return (
    <div className={styles.fetchContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData();
        }}
        className={styles.fetchForm}
      >
        <label className={styles.fetchLabel}>{searchLabel}</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.fetchInput}
          placeholder="Enter Password..."
          required
          minLength={minLength}
          maxLength={maxLength}
        />
        <button
          type="submit"
          disabled={isDisabled}
          className={`${styles.fetchButton} ${
            isDisabled ? styles.fetchButtonDisabled : ""
          }`}
        >
          {loading ? <ThinkingSpinner /> : "Launch"}
        </button>
      </form>
      {result && renderResults(result)}
    </div>
  );
}
function DataField({ label, value }) {
  return (
    <div className={styles.dataField}>
      <span className={styles.dataLabel}>{label}:</span>
      <span className={styles.dataValue}>{String(value)}</span>
    </div>
  );
}

function DataFieldWithProgress({ label, value }) {
  const progress = Math.min(Math.max((value / 7) * 100, 0.5), 100);

  return (
    <div className={styles.dataFieldWithProgress}>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
      <span className={styles.dataLabel}>{label}:</span>
      <span className={styles.dataValue}>{String(value)}</span>
    </div>
  );
}

const ThinkingSpinner = () => {
  return <div className={styles.spinner} />;
};

function sendUniqueGTMEvent(eventName, eventParams = {}) {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  const uniqueId = crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).substr(2, 9);

  window.dataLayer.push({
    event: eventName,
    ...eventParams,
    unique_id: uniqueId,
  });
}
