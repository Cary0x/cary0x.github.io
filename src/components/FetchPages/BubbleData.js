import { FetchComponent, DataField } from "@site/src/components/FetchData";

export default function BubbleData() {
  const renderResults = (data) => (
    <div className="flex flex-col space-y-2">
      {data?.error ? (
        <span className="text-red-500">{data?.error}</span>
      ) : (
        <>
          <DataField label="Bubbles" value={data?.bubbles} />
          <DataField label="Bubble Boosts" value={data?.boosts} />
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center p-8">
      <FetchComponent
        apiUri="https://www.cary0x.com/api/bubbles/"
        searchLabel="Enter Solana Wallet: "
        renderResults={renderResults}
      />
    </div>
  );
}
