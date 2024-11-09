import { FetchComponent, DataField } from "@site/src/components/FetchData";
import styles from "@site/src/components//FetchData.module.css";

export default function ManifestData() {
  const renderResults = (data) => {
    const date = new Date(data.proExpiry * 1000);
    const expiryDate = isNaN(date.getTime())
      ? "Expired"
      : date.toLocaleString();

    return (
      <div className={styles.renderContainer}>
        {data.error ? (
          <span className={styles.errText}>{data.error}</span>
        ) : (
          <>
            <DataField label="Sol Swaps" value={data.proSwapsSol} />
            <DataField label="BX Swaps" value={data.proSwapsBx} />
            <DataField label="Has Twitter" value={data.hasTwitter} />
            <DataField label="Badges" value={data.badges} />
            <DataField label="Cope" value={data.cope} />
            <DataField label="Is Pro" value={data.isPro} />
            <DataField label="Pro Expiry" value={expiryDate} />
            {/* <DataField label="Pro Ago" value={data.proAgo} /> */}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center p-8">
      <FetchComponent
        apiUri="https://www.cary0x.com/api/manifest/"
        searchLabel="Enter Solana Wallet: "
        renderResults={renderResults}
      />
    </div>
  );
}
