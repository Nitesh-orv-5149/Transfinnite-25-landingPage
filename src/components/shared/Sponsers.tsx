import SimpleCard from "../ui/SimpleCard"

function Sponsers() {

  const SponsersData = [
    {name: "netcon"},
    {name: "boeing"},
    {name: "tezos india"},
    {name: "bharatX"},
  ]
  return (
    <section className="mt-30 flex justify-center items-center flex-col gap-10">
      <h1 className="capitalize text-5xl font-bold underline decoration-2 underline-offset-4">ourSponsers</h1>
      <div className="flex flex-wrap gap-15 mt-10 justify-center">
        {SponsersData.map((sponser, index) => (
          <SimpleCard key={index} title={sponser.name} />
        ))}
      </div>
    </section>
  )
}

export default Sponsers