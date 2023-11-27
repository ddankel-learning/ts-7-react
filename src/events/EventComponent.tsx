const EventComponent: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("EVENT", event);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG", event);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <div draggable onDragStart={handleDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
