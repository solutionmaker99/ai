loadData = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const cards = data.data.tools;
  console.log(cards);
  displayCards(cards);
};

displayCards = (cards) => {
  cards.forEach((card) => {
    console.log(card);
  });
};

loadData();
