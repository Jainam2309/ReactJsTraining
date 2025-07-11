import Card from "./Card";

export default function Tours({ tours, removeTour }) {
  return (
    <div>
      {
        tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })
      }
    </div>
  );
}
