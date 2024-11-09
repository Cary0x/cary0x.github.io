import { FetchComponent, DataField } from "@site/src/components/FetchData";

export default function BoosterData() {
  const renderResults = (data) => (
    <div className="flex flex-col space-y-2">
      {data.error ? (
        <span className="text-red-500">{data.error}</span>
      ) : (
        <>
          <DataField label="Badges" value={data.badges} />
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center p-8">
      <FetchComponent
        apiUri="https://www.cary0x.com/api/boosters/"
        searchLabel="Enter Ethereum Address: "
        renderResults={renderResults}
        localStorageName="ethwallet"
        localStorageNameSelect="ethwalletselect"
      />
    </div>
  );
}
