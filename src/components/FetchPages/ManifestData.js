import { FetchComponent, DataField } from "@site/src/components/FetchData";

export default function ManifestData() {
  const renderResults = (data) => (
    <div className="flex flex-col space-y-2">
      {data.error ? (
        <span className="text-red-500">{data.error}</span>
      ) : (
        <>
          <DataField label="Swaps" value={data.proSwapsSol} />
          <DataField label="Has Twitter" value={data.hasTwitter} />
          <DataField label="Badges" value={data.badges} />
          <DataField label="Cope" value={data.cope} />
          <DataField label="Is Pro" value={data.isPro} />
          <DataField label="Pro Ago" value={data.proAgo} />
        </>
      )}
    </div>
  );

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
