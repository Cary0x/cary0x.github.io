import {
  FetchComponent,
  DataField,
  DataFieldWithProgress,
} from "@site/src/components/FetchData";

export default function HealthData() {
  const renderResults = (data) => (
    <div className="flex flex-col space-y-2">
      {data?.error ? (
        <span className="text-red-500">{data?.error}</span>
      ) : (
        <>
          <DataFieldWithProgress label="Health" value={data?.stats?.health} />
          <DataField
            label="Mining Sessions"
            value={data?.stats?.mining_sessions}
          />
          <DataField label="In Mempool" value={data?.stats?.in_mempool} />
          <DataField label="Sent" value={data?.stats?.sent} />
          <DataField label="Failed" value={data?.stats?.failed} />
          <DataField label="Drifted" value={data?.stats?.drifted} />
          <DataField label="Drift Risk" value={data?.stats?.drift_risk} />
          <DataField label="Priority" value={data?.stats?.priority} />
          <DataField
            label="Estimated SOL USD"
            value={data?.stats?.estimates.sol_usd?.toFixed(2)}
          />
          <DataField
            label="Estimated wPond USD"
            value={data?.stats?.estimates?.wpond_usd?.toFixed(2)}
          />
          <DataField
            label="Estimated Drift Risk USD"
            value={data?.stats?.estimates?.drift_risk_usd?.toFixed(2)}
          />
          <DataField
            label="Estimated Max Claim Estimate USD"
            value={data?.stats?.estimates?.max_claim_estimate_usd?.toFixed(2)}
          />
          <DataField
            label="Estimated Drifted USD"
            value={data?.stats?.estimates?.drifted_usd?.toFixed(2)}
          />
          {data?.ai_beta?.map((e, i) => (
            <DataField label={`AI Note ${i + 1}`} value={e} key={i} />
          ))}
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center p-8">
      <FetchComponent
        apiUri="https://www.cary0x.com/api/health/"
        searchLabel="Enter Solana Wallet: "
        renderResults={renderResults}
      />
    </div>
  );
}
