# 22-people

A few years ago I took [mgram](https://mgram.me), a personality test out of Japan that estimates how likely you are to find a compatible partner. My result: **0.00029%**. To meet just one person compatible with me, I'd need to meet roughly **345,000 people**.

At the time, this didn't scare me. I had a partner — someone I loved enough to consider leaving behind a career, a country, a language, an entire life I'd built. None of these were things I had ever imagined being willing to lose. I didn't know I was the kind of person who could want that until I did. So I looked at that number and thought: I already beat it.

Years later, we broke up. The reason wasn't distance or falling out of love. It was something harder to name — a cultural fault line that ran through the middle of us. The thing my partner once loved about me — some unclassifiable balance that didn't fit neatly into any category — became, in a bad moment, the thing they attacked. I loved them at the moment we ended. I still don't hate them.

This pattern is not new. I've been in relationships almost continuously since I was very young. The longest I've ever been single is three months. I don't struggle to fall in love. I struggle to make it last. And at some point I started wondering whether the problem was structural — not "what's wrong with me" but "what patterns am I running that I can't see from inside them?"

So I made a spreadsheet. 22 people. 57 columns. Everything from humor to scent to "clumsy but trying."

22 people. At 0.00029%, that's the equivalent of having met **7.6 million** — roughly the population of Seoul. An impossible number. Yet here they are, in a CSV file.

22 could make me look experienced at love. Lately it feels more like evidence that I'm bad at it. Either way, I wanted to understand the pattern. So I trained a model on it.

The question was simple: **what makes someone my type?** The answer was not simple.

## What's in here

A full ML pipeline applied to a personal relationship dataset: EDA, feature selection, Monte Carlo simulation, compromise analysis, and reverse-engineered ideal profiles.

**EDA** (`00_eda.ipynb`): .numbers → CSV conversion (because real data doesn't start clean), missing value analysis, median imputation, correlation heatmap, KMeans clustering, PCA. The clustering produced a silhouette score of 0.194, which is terrible — but correct. People don't sort into neat species. *Humans are not irises.*

**Monte Carlo + Compromise Simulator** (`01_monte_carlo.ipynb`): Multi-stage feature selection (correlation → multicollinearity → RF importance → top 5), XGBoost model, 10,000 simulated people. Baseline probability of meeting an "ideal type": **17.3%** at threshold 8. My first reaction to this number was *"okay... so what?"* — and that turned out to be the real insight. A probability alone is useless. Nobody changes their life over a percentage.

So I built a compromise simulator. The model identified my top 5 predictors of attraction — push-pull tension, conversation enjoyment, scent, humor match, and clumsy-but-trying effort — and I asked: what happens if I lower my standards on each, one point at a time?

Results: compromising 1 point on push-pull tension alone moved the needle from 17.3% → 23.1%. Conversation enjoyment: 17.3% → 21.5%. Scent barely mattered (17.3% → 17.6%). But the real finding was the threshold curve — dropping my overall cutoff from 8 to 7 jumped probability to **40.6%**. A 2.3x multiplier from a single point of flexibility. I called this the *golden point* — where marginal compromise yields disproportionate returns. That's the thing someone can actually use.

**Ideal Type Generator** (`02_ideal_type_generator.ipynb`): Reversed the pipeline. Instead of "score this person," the question becomes "what combination of features produces an 8+?" Uses all 12 selected features (the Monte Carlo narrowed to 5, which in hindsight made the sensitivity analysis [somewhat tautological](#limitations)). Finds the closest real person in the dataset and computes residuals.

When I saw the closest match and where they exceeded my "ideal" — *clumsy-but-trying: -3.2, sensory cues: -2.3* — my only response was "약간 슬프네" (that's a little sad). Data has a way of showing you what you already knew but hadn't said out loud.

## Things I didn't expect to learn

**Honesty correlates negatively with attraction.** This one bothered me until I realized it was my fault — not the model's. I designed `D17_honesty_transparency` as a single 1-10 scale, but what I actually respond to isn't raw honesty. It's something more specific: complexity paired with transparency. Someone who is genuinely complicated but legible about it. A blunt feature couldn't capture that distinction, so the model learned noise. Lesson: if your feature design is cruder than your actual preferences, the model will reflect the crudeness, not the preference.

**The person who "made me anxious lately" landed in the highest-attraction cluster.** Data doesn't lie. Being unsettled by someone is itself evidence of emotional impact. Indifference doesn't unsettle.

**A decision tree trained on "did I date this person?" produced a literal flowchart of my romantic decision-making.** First split: humor match > 6.5. If yes, check complementary competence. The tree knew my priorities before I articulated them.

**Monte Carlo only measures probability within people I was already attracted to.** Not "what are the odds of meeting my ideal type in the world" — that's unknowable from this data. What it actually says: *"Among people who already caught your attention, how many would you fall for hard?"* Roughly 1 in 6. The denominator is the part people miss.

**XGBoost transitions are smoother than Random Forest.** RF predicts in steps — thresholds trigger jumps. XGBoost corrects residuals sequentially, so probability curves are gradual. Think: 100 independent judges averaging scores vs. judges who each correct the previous one's mistakes. For a compromise simulator, smooth matters — "lower this by 1, gain 2%" is more trustworthy than a cliff.

## What the model can't teach

The most important things I learned from this project didn't come from the model output. They came from thinking about what the model output means.

**Powerful models abandon linear proportionality.** The reason nonlinear models outperform linear ones is that they stop expecting proportional returns. The same applies outside the notebook. "I gave this much, so I should get this much back" is a linear equation. Love doesn't converge that way.

**You can create conditions. You cannot control outcomes.** Monte Carlo can tell me where the golden point is — the exact point of compromise where probability doubles. But it cannot make a specific person love me. What I can do ends at conditions. What happens after belongs to the other person.

**"I might not be loved by this person" is probability. "I am unlovable" is determinism.** The first is a model that updates with new evidence. The second is a model that has stopped learning. The moment you confuse the two, the pipeline breaks.

## Limitations

n=22. All of this is exploratory. The model captures patterns in one person's dating history — mine — not universal dynamics. If you run this on your own 22 people, you'll get a completely different golden point.

The dataset is biased toward people I was already attracted to. Very few negative cases. A model that only sees "yes" struggles to learn "no."

Narrowing to top 5 features for Monte Carlo made the compromise simulator's conclusions partially circular: the most important feature by RF importance was also the most sensitive in the simulator. Not a discovery — a confirmation. The ideal type generator used 12 features and found more interesting things.

## Theoretical grounding

The 57 features didn't come from a textbook. I started by surveying relationship psychology literature with an AI assistant — Reis's Perceived Partner Responsiveness, Swann's Self-Verification Theory, attachment theory — to identify dimensions that research suggests matter for attraction and relationship satisfaction. Then I talked through my own history: what I actually noticed about people, what made me stay, what made me leave. The final feature set is a hybrid of academic frameworks and personal pattern recognition.

This means the theoretical grounding is honest but not rigorous. Some features map cleanly to established constructs. Others — like `D24_clumsy_but_trying` or `E34_push_pull_tension` — are things I know I respond to but couldn't find in any paper. I kept them anyway, because a model built on someone else's feature set would be studying someone else's love life.

If you're thinking about doing something similar: start with the literature to avoid blind spots, but don't let it override what you actually know about yourself. The most predictive features in my model were the ones I designed from experience, not the ones I borrowed from journals.

## Stack

Python, pandas, numpy, scikit-learn (RandomForest, KMeans, PCA), XGBoost, matplotlib, React.

## Infographics

React components in `viz/` with hardcoded results for portfolio use:

- `feature_importance.jsx` — feature importance breakdown
- `compromise_simulator.jsx` — threshold sensitivity with golden point
- `ideal_type_generator.jsx` — ideal profile + closest person residuals

## Dataset

22 people, 57 features, 4 targets. All ratings are self-reported on a 1-10 scale. Names anonymized. See [`docs/feature_dictionary.md`](docs/feature_dictionary.md) for feature descriptions.

---

*I spent months designing 57 features to capture what I want in a person. The model works. I still can't tell if the Subject is past tense yet.*
