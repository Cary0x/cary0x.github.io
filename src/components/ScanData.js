import {
  FetchComponent,
  DataField,
  LinkField,
} from "@site/src/components/FetchData";
import styles from "@site/src/components//FetchData.module.css";

export default function ScanData() {
  const renderResults = (data) => (
    <div className={styles.renderContainer}>
      {data.error ? (
        <span className={styles.errText}>{data.error}</span>
      ) : (
        <>
          <LinkField
            label="Hash Boost History"
            href={`https://solscan.io/account/${data}?exclude_amount_zero=false&remove_spam=false&from_address=${data}&to_address=%218bVEtH3bXnpoS8mHCHkv6xfeT8EvG1KtWoTQvP3mx5nV%2C4ngqDt821wV2CjxoZLCLcTAPZNt6ZqpswoqyQEztsU36%2C%21${data}&token_address=So11111111111111111111111111111111111111111#transfers`}
            value="Click here"
          />
          <LinkField
            label="Mining Claim History"
            href={`https://solscan.io/account/${data}?from_address=AYg4dKoZJudVkD7Eu3ZaJjkzfoaATUqfiv8w8pS53opT#transfers`}
            value="Click here"
          />
          <LinkField
            label="Swap Reward History"
            href={`https://solscan.io/account/${data}?from_address=1orFCnFfgwPzSgUaoK6Wr3MjgXZ7mtk8NGz9Hh4iWWL&remove_spam=false&exclude_amount_zero=false#transfers`}
            value="Click here"
          />
          <LinkField
            label="Pro Sub History"
            href={`https://solscan.io/account/${data}?exclude_amount_zero=false&remove_spam=false&to_address=2bsXHfqzWS3kgcgGifmffNCRokzgV1K9RMEiTcL6zQRF%2CGSMBLYht4JGmm1ZofyTFTGykYCwsenNQpRmiJ5fMnHpD&token_address=So11111111111111111111111111111111111111111&value=5&value=undefined#transfers`}
            value="Click here"
          />
          <LinkField
            label="wPond In/Out History"
            href={`https://solscan.io/account/${data}?from_address=%21AYg4dKoZJudVkD7Eu3ZaJjkzfoaATUqfiv8w8pS53opT%2C%211orFCnFfgwPzSgUaoK6Wr3MjgXZ7mtk8NGz9Hh4iWWL&to_address=%211orFCnFfgwPzSgUaoK6Wr3MjgXZ7mtk8NGz9Hh4iWWL&token_address=3JgFwoYV74f6LwWjQWnr3YDPFnmBdwQfNyubv99jqUoq&remove_spam=false&exclude_amount_zero=false&visualize=true#transfers`}
            value="Click here"
          />
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center p-8">
      <FetchComponent
        searchLabel="Enter Solana Wallet: "
        renderResults={renderResults}
      />
    </div>
  );
}
