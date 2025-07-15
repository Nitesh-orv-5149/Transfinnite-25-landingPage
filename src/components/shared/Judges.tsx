import SimpleCard from "../ui/SimpleCard"

function Judges() {

  const JudgesData = [
    {name: "Anand Kumar", company: "Intel"},
    {name: "Anirudh R", company: "Oracle"},
    {name: "Ayush Singh", company: "microsoft"}
  ]
  return (
    <section className="mt-30 flex justify-center items-center flex-col gap-10">
      <h1 className="capitalize text-5xl font-bold underline decoration-2 underline-offset-4">our judges</h1>
      <div className="flex flex-wrap gap-15 mt-10 justify-center">
        {JudgesData.map((judge, index) => (
          <SimpleCard key={index} title={judge.name} subtitle={judge.company} />
        ))}
      </div>
    </section>
  )
}

export default Judges