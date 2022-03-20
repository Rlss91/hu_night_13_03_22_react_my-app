const dataArr = [
  { name: "sadfsdfasdf1", desc: "asdfrehserhsrgeargerherth1" },
  { name: "sadfsdfasdf2", desc: "asdfrehserhsrgeargerherth2" },
  { name: "sadfsdfasdf3", desc: "asdfrehserhsrgeargerherth3" },
  { name: "sadfsdfasdf4", desc: "asdfrehserhsrgeargerherth4" },
];

const CardsPanelComponent = () => {
  return (
    <div>
      {dataArr.map((item) => {
        return (
          <div className="card" key={item.name}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardsPanelComponent;
