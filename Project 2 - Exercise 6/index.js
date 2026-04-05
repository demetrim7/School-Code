const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

guests.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
};

guests.CICERO.pastGifts[2] = "Golden Lyre";

const regionAntony = guests.ANTONY.region;

delete guests.CICERO;

const generalProfile = guests.ANTONY;

generalProfile.region = "Egypt"; // This also changes the region in the original ANTONY object to "Egypt" because generalProfile is a reference to the same object in memory that guests.ANTONY points to.

