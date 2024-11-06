import CardFour from "@/components/card-four/CardFour";
import clusterData from "@/data/clusterData";

export default function WorkClustersPage() {
  return (
    <main>
      <h2 className="text-center text-3xl font-bold relative w-fit mt-auto mx-auto after:absolute after:w-20 after:h-1 after:bg-orange-500 after:bottom-0 after:left-0 after:right-0 after:top-10">
        Our Work Clusters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {clusterData.map((item) => (
          <CardFour
            key={item.id}
            title={item.title}
            description={item.description}
            hasAnotherDescription={item.hasAnotherDescription}
            otherDescription={item.otherDescription}
            otherIcon={item.otherIcon}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
