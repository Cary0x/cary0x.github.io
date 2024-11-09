import { FetchComponent, DataField } from "@site/src/components/FetchData";

export default function LuckData() {
  const renderResults = (data) => (
    <div className="flex flex-col space-y-2">
      {data.error ? (
        <span className="text-red-500">{data.error}</span>
      ) : (
        <>
          <DataField label="Luck" value={data.luck} />
          <DataField label="Impact" value={data.impact} />
          <DataField label="Recent Referrals" value={data.referrals} />
          <DataField label="Recent Referral Txns" value={data.referralTxns} />
          {/* <DataField label="Associates" value={data.associates} /> */}
          {/* <DataField label="Associate Txns" value={data.associateTxns} /> */}
          <DataField
            label="Generated"
            value={Math.round(data.generated * 100) / 100}
          />
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center p-8">
      <FetchComponent
        apiUri="https://www.cary0x.com/api/luck/"
        searchLabel="Enter Solana Wallet: "
        renderResults={renderResults}
      />
    </div>
  );
}
