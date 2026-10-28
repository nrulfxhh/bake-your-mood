const recipes = {
  brownies: {
    title: "Chocolate Brownies", time: "35 min", difficulty: "Easy", mood: "sad",
    description: "Deeply chocolatey, fudgy squares for the days when you need a little comfort.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    ingredients: ["115 g butter, melted", "150 g sugar", "2 eggs", "45 g cocoa powder", "65 g plain flour", "A pinch of salt", "A handful of chocolate chips (optional)"],
    steps: ["Heat the oven to 175°C and line a small baking tin.", "Whisk melted butter and sugar. Beat in the eggs.", "Fold in cocoa, flour and salt until just combined.", "Add chocolate chips if using, then spread into the tin.", "Bake for 20–25 minutes. Let cool before slicing."]
  },
  cupcakes: {
    title: "Strawberry Cupcakes", time: "30 min", difficulty: "Easy", mood: "happy",
    description: "Soft, cheerful cupcakes for celebrating the little things (and the big ones, too).",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85",
    ingredients: ["125 g plain flour", "100 g sugar", "1 tsp baking powder", "1 egg", "80 ml milk", "60 g melted butter", "A few chopped strawberries"],
    steps: ["Heat the oven to 180°C and line a cupcake tray.", "Mix flour, sugar and baking powder in a bowl.", "Whisk egg, milk and melted butter in another bowl.", "Combine wet and dry ingredients gently; fold in strawberries.", "Divide into cases and bake for 16–20 minutes, until risen."]
  },
  cookies: {
    title: "Chocolate Chip Cookies", time: "25 min", difficulty: "Easy", mood: "lazy",
    description: "A no-fuss classic with crisp edges, soft middles and little chocolate pockets.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85",
    ingredients: ["115 g softened butter", "100 g brown or white sugar", "1 egg", "160 g plain flour", "½ tsp baking soda", "A pinch of salt", "100 g chocolate chips"],
    steps: ["Heat the oven to 180°C and line a baking tray.", "Cream butter and sugar until soft, then mix in the egg.", "Stir in flour, baking soda and salt.", "Fold in chocolate chips and scoop onto the tray with space between.", "Bake for 9–12 minutes. Let the cookies rest on the tray."]
  },
  cinnamon: {
    title: "Cozy Cinnamon Muffins", time: "30 min", difficulty: "Easy", mood: "cozy",
    description: "Warm cinnamon, a soft crumb, and the kind of smell that makes a room feel like home.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=85",
    ingredients: ["180 g plain flour", "80 g sugar", "1½ tsp baking powder", "1 tsp cinnamon", "1 egg", "120 ml milk", "60 g melted butter"],
    steps: ["Heat the oven to 180°C and prepare a muffin tin.", "Mix flour, sugar, baking powder and cinnamon.", "Whisk egg, milk and butter together.", "Fold wet and dry ingredients until just combined.", "Bake for 18–22 minutes, until a skewer comes out clean."]
  },
  calming: {
    title: "Easy Banana Bread", time: "45 min", difficulty: "Easy", mood: "stressed",
    description: "A gentle, one-bowl bake to slow down and focus on one small thing at a time.",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=900&q=85",
    ingredients: ["2 ripe bananas", "1 egg", "75 g sugar", "60 g melted butter or oil", "180 g plain flour", "1 tsp baking powder", "A pinch of salt"],
    steps: ["Heat the oven to 175°C and grease a small loaf tin.", "Mash the bananas in a bowl, then mix in egg, sugar and butter.", "Fold in flour, baking powder and salt.", "Pour into the tin and smooth the top.", "Bake for 35–45 minutes, until a skewer comes out clean."]
  },
  celebration: {
    title: "Celebration Sprinkle Cookies", time: "25 min", difficulty: "Easy", mood: "excited",
    description: "Colourful, happy cookies made for big news, tiny wins and everything worth celebrating.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85",
    ingredients: ["115 g softened butter", "100 g sugar", "1 egg", "160 g plain flour", "½ tsp baking powder", "2 tbsp colourful sprinkles", "A pinch of salt"],
    steps: ["Heat the oven to 180°C and line a baking tray.", "Cream butter and sugar, then beat in the egg.", "Stir in flour, baking powder and salt.", "Fold in sprinkles and scoop dough onto the tray.", "Bake for 10–12 minutes and cool before sharing."]
  }
};

const moodMatches = {
  happy: {recipe:"cupcakes", title:"A little cupcake sunshine!", description:"Your happy energy deserves something bright, fluffy and full of joy."},
  sad: {recipe:"brownies", title:"A brownie kind of day.", description:"It's okay to have a slower day. Here's a fudgy little comfort bake for you."},
  lazy: {recipe:"cookies", title:"Easy cookies, zero fuss.", description:"Keep it simple. These chocolate chip cookies are quick, familiar and so worth it."},
  cozy: {recipe:"cinnamon", title:"Let's make the kitchen cozy.", description:"Warm cinnamon and a soft bake are just right for your slow, peaceful mood."},
  stressed: {recipe:"calming", title:"One small thing at a time.", description:"Mashing bananas and stirring a bowl can be a gentle little reset. No rush."},
  excited: {recipe:"celebration", title:"Something worth celebrating!", description:"Bring on the sprinkles. These cheerful cookies are made for your big energy."}
};

const moodCards = document.querySelectorAll(".mood-card");
const moodResult = document.getElementById("moodResult");
let currentRecipe = "brownies";
let toastTimeout;

moodCards.forEach(card => card.addEventListener("click", () => {
  moodCards.forEach(item => item.classList.remove("selected"));
  card.classList.add("selected");
  const match = moodMatches[card.dataset.mood];
  const recipe = recipes[match.recipe];
  currentRecipe = match.recipe;
  document.getElementById("resultTitle").textContent = match.title;
  document.getElementById("resultDescription").textContent = match.description + " " + recipe.description;
  document.getElementById("resultTime").textContent = "⏱ " + recipe.time;
  document.getElementById("resultDifficulty").textContent = "♡ " + recipe.difficulty;
  document.getElementById("resultImage").src = recipe.image;
  document.getElementById("resultImage").alt = recipe.title;
  moodResult.hidden = false;
  moodResult.scrollIntoView({behavior:"smooth", block:"nearest"});
}));

const dialog = document.getElementById("recipeDialog");
function openRecipe(key) {
  const recipe = recipes[key] || recipes.brownies;
  currentRecipe = key;
  document.getElementById("dialogKicker").textContent = "A LITTLE RECIPE FOR YOU · " + recipe.time.toUpperCase();
  document.getElementById("dialogTitle").textContent = recipe.title;
  document.getElementById("dialogIntro").textContent = recipe.description;
  const ingredients = document.getElementById("dialogIngredients");
  const steps = document.getElementById("dialogSteps");
  ingredients.replaceChildren(...recipe.ingredients.map(text => {const li=document.createElement("li");li.textContent=text;return li;}));
  steps.replaceChildren(...recipe.steps.map(text => {const li=document.createElement("li");li.textContent=text;return li;}));
  if (typeof dialog.showModal === "function") dialog.showModal();
  else alert(recipe.title + "\\n\\n" + recipe.steps.join("\\n"));
}
document.getElementById("viewRecipe").addEventListener("click", () => openRecipe(currentRecipe));
document.querySelectorAll(".recipe-open").forEach(button => button.addEventListener("click", () => openRecipe(button.dataset.recipe)));
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2500);
}

const savedRecipes = new Set(JSON.parse(localStorage.getItem("bym-saved-recipes") || "[]"));
function updateSavedButtons() {
  document.querySelectorAll(".save-recipe").forEach(button => {
    const saved = savedRecipes.has(button.dataset.save);
    button.classList.toggle("saved", saved);
    button.textContent = saved ? "♥" : "♡";
    button.setAttribute("aria-pressed", String(saved));
  });
  const note = document.getElementById("savedNote");
  note.textContent = savedRecipes.size ? `Your little recipe box has ${savedRecipes.size} saved ${savedRecipes.size === 1 ? "recipe" : "recipes"} ♡` : "Tap ♡ on a recipe to save it to your little recipe box.";
}
document.querySelectorAll(".save-recipe").forEach(button => button.addEventListener("click", () => {
  const key = button.dataset.save;
  if (savedRecipes.has(key)) { savedRecipes.delete(key); showToast("Removed from your recipe box."); }
  else { savedRecipes.add(key); showToast("Saved to your little recipe box ♡"); }
  localStorage.setItem("bym-saved-recipes", JSON.stringify([...savedRecipes]));
  updateSavedButtons();
}));
updateSavedButtons();

document.getElementById("ingredientSearch").addEventListener("click", () => {
  const input = document.getElementById("ingredients").value.trim().toLowerCase();
  const feedback = document.getElementById("ingredientFeedback");
  if (!input) { feedback.textContent = "Add a few ingredients first — e.g. flour, eggs, chocolate."; return; }
  const items = input.split(",").map(item => item.trim()).filter(Boolean);
  const choices = [
    {key:"brownies", terms:["chocolate","cocoa","butter","egg","flour"]},
    {key:"cupcakes", terms:["strawberry","milk","egg","flour","butter","sugar"]},
    {key:"cookies", terms:["chocolate","chocolate chips","flour","butter","egg","sugar"]},
    {key:"cinnamon", terms:["cinnamon","milk","flour","egg","butter","sugar"]},
    {key:"calming", terms:["banana","bananas","egg","flour","butter","sugar"]},
    {key:"celebration", terms:["sprinkles","flour","butter","egg","sugar"]}
  ];
  const ranked = choices.map(choice => ({...choice, score:items.reduce((sum,item)=>sum+(choice.terms.some(term=>term.includes(item)||item.includes(term))?1:0),0)})).sort((a,b)=>b.score-a.score);
  if (ranked[0].score === 0) {
    feedback.textContent = "We couldn't find a close match yet. Try flour, eggs, butter, chocolate, banana or cinnamon.";
    return;
  }
  const recipe = recipes[ranked[0].key];
  feedback.textContent = `Sweet idea: ${recipe.title} (${recipe.time}). Opening the recipe for you…`;
  openRecipe(ranked[0].key);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

let timerSeconds = 25 * 60;
let timerInterval = null;
let timerRunning = false;
const timerDisplay = document.getElementById("timerDisplay");
const timerStart = document.getElementById("timerStart");
const timerMessage = document.getElementById("timerMessage");
function renderTimer() {
  const mins = Math.floor(timerSeconds / 60).toString().padStart(2,"0");
  const secs = (timerSeconds % 60).toString().padStart(2,"0");
  timerDisplay.textContent = `${mins}:${secs}`;
}
function stopTimer() { clearInterval(timerInterval); timerInterval = null; timerRunning = false; timerStart.textContent = "Start timer ▶"; }
timerStart.addEventListener("click", () => {
  if (timerRunning) { stopTimer(); timerMessage.textContent = "Timer paused. Take your time ♡"; return; }
  if (timerSeconds <= 0) timerSeconds = 25 * 60;
  timerRunning = true;
  timerStart.textContent = "Pause timer Ⅱ";
  timerMessage.textContent = "Your timer is running. Keep an eye on your bake!";
  timerInterval = setInterval(() => {
    timerSeconds--;
    renderTimer();
    if (timerSeconds <= 0) {
      stopTimer();
      timerMessage.textContent = "Ding ding! Your timer is done — check your bake ♡";
      showToast("Your little oven timer is done! ♡");
      if ("Notification" in window && Notification.permission === "granted") new Notification("Bake Your Mood", {body:"Your timer is done — check your bake!"});
    }
  }, 1000);
});
document.getElementById("timerReset").addEventListener("click", () => {
  stopTimer(); timerSeconds = 25 * 60; renderTimer(); timerMessage.textContent = "Timer reset. Ready when you are ♡";
  document.querySelectorAll(".timer-presets button").forEach(button => button.classList.toggle("active", button.dataset.minutes === "25"));
});
document.querySelectorAll(".timer-presets button").forEach(button => button.addEventListener("click", () => {
  stopTimer(); timerSeconds = Number(button.dataset.minutes) * 60; renderTimer();
  document.querySelectorAll(".timer-presets button").forEach(item => item.classList.toggle("active", item === button));
  timerMessage.textContent = `${button.dataset.minutes} minutes of baking time, just for you ♡`;
}));
renderTimer();
