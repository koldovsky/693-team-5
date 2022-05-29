(function() {
    const eventsJson = `
      [
          {
            "title": "Tate Modern",
            "subtitle": "12.10.2020 | London, Great Britain",
            "text": "I am pleased to announce that several of my works such as \\\"Chaos\\\", \\\"The Middle\\\", \\\"Albatross\\\" and others will be presented at the Tate Modern.",
            "imgUrl": "img/events/tate_modern.jfif"
          },
          {
            "title": "Gavin Brown’s Enterprise",
            "subtitle": "02.01.2021 | NY, USA",
            "text": "A great friend of mine, Gavin Brown has two galleries - one on the Lower East Side, the other in Harlem. You will be able to see my works there.",
            "imgUrl": "img/events/gavin_brown.jfif"
          },
          {
            "title": "David Zwirner Gallery",
            "subtitle": "02.03.2021 | NY, USA",
            "text": "David is going to open his second gallery in New York in 2021, and I'm pleased to announce that my works will be presented there.",
            "imgUrl": "img/events/david_zwirner.jfif"
          },
          {
            "title": "Albertina Modern",
            "subtitle": "03.04.2021 | NY, USA",
            "text": "Albertina is one of the most famous museums in the world. Be sure to check my paintings out at Albertina Modern, this gorgeous museum in Vienna.",
            "imgUrl": "img/events/albertina_modern.jfif"
          }
      ]
    `;

    function renderEvents(events) {
        const eventsContainer = document.querySelector('.events__list');
        for (let i = 0; i < events.length; i++) {
            let cardSide = "events__card_left";
            if (i % 2 !== 0) {
                cardSide = "events__card_right";
            }
            eventsContainer.innerHTML += `
            <div class="events__card ${cardSide}">
                <div class="events__card_leftColumn">
                    <img alt="${events[i].title}" class="events__card_image" src="${events[i].imgUrl}">
                </div>
                <div class="events__card_rightColumn">
                    <p class="events__card_title">${events[i].title}</p>
                    <p class="events__card_subtitle">${events[i].subtitle}</p>
                    <p class="events__card_text">${events[i].text}</p>
                </div>
            </div>
            `;
        }
    }

    const events = JSON.parse(eventsJson);
    renderEvents(events);
})();