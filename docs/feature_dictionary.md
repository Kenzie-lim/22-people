# Feature Dictionary (v2)

## Overview

This document describes 57 features across 9 categories used to analyze romantic interactions. Features capture demographics, sensory impressions, background context, personality traits, relationship dynamics, values alignment, chemistry markers, situational context, and behavioral interaction patterns. The data also includes 4 target variables for outcome prediction.

---

## A. Demographics (4 features)

| # | Feature | Scale | Description |
|---|---------|-------|-------------|
| A1 | age_diff | Integer | Age difference relative to the other person (negative if younger, positive if older) |
| A2 | meeting_route | Categorical | Meeting path (school/work/app/social/online/friend_intro) |
| A3 | time_to_attraction | Days | Time elapsed from first meeting to recognizing attraction |
| A4 | meeting_freq | 1-10 | Average weekly frequency of meetings/interactions |

---

## B. Physical/Sensory (5 features)

| # | Feature | Scale | Description |
|---|---------|-------|-------------|
| B5 | appearance | 1-10 | Attractiveness of physical appearance |
| B6 | style | 1-10 | Alignment of fashion/style preferences |
| B7 | voice | 1-10 | Attractiveness of voice (tone, timbre, delivery) |
| B8 | physical_presence | 1-10 | Physical presence and energy (body language, gestures, vitality) |
| B9 | scent_sensory | 1-10 | Olfactory and sensory attraction |

---

## C. Background/Social (7 features)

| # | Feature | Scale | Description |
|---|---------|-------|-------------|
| C10 | background_uniqueness | 1-10 | Uniqueness of background (distinctive history, cultural diversity) |
| C11 | education | 1-10 | Interest in their education/field of study (quality of curiosity, not prestige) |
| C12 | cultural_sophistication | 1-10 | Cultural literacy and refinement |
| C13 | language_ability | 1-10 | Multilingual capability and linguistic sensitivity |
| C14 | financial_stability | 1-10 | Economic stability and security |
| C15 | social_status | 1-10 | Social position and professional standing |
| C16 | outsider_identity | 1-10 | Outsider/nomadic identity and independence from mainstream |

---

## D. Personality/Cognitive (11 features)

| # | Feature | Scale | Description |
|---|---------|-------|-------------|
| D17 | honesty_transparency | 1-10 | Honesty and transparency (authentic, not strategic) |
| D18 | self_awareness_metacog | 1-10 | Self-awareness and metacognitive capacity |
| D19 | intellectual_curiosity | 1-10 | Strength of intellectual curiosity |
| D20 | cognitive_sharpness | 1-10 | Cognitive acuity and responsiveness |
| D21 | humor_match | 1-10 | Alignment of humor style and sensibility |
| D22 | competence_selfeval_gap | 1-10 | Mismatch between actual competence and self-perception (skilled but unaware) |
| D23 | growth_orientation | 1-10 | Orientation toward personal growth and learning |
| D24 | clumsy_but_trying | 1-10 | Endearing effort despite awkwardness or lack of polish |
| D25 | agreeableness | 1-10 | Friendliness and openness to others |
| D26 | neuroticism | 1-10 | Tendency toward anxiety, worry, emotional reactivity |
| D27 | extraversion | 1-10 | Extraversion and social engagement |

---

## E. Relationship Dynamics (8 features)

| # | Feature | Scale | Description |
|---|---------|-------|-------------|
| E28 | reads_me | 1-10 | Attentiveness and accuracy in understanding my emotional state |
| E29 | vulnerability_shown | 1-10 | Depth of vulnerability and emotional openness displayed |
| E30 | emotional_safety | 1-10 | Sense of emotional safety (ability to let guard down) |
| E31 | power_balance | 1-10 | Relational power balance (5=equal, 1=I'm weaker, 10=I'm stronger) |
| E32 | care_impulse | 1-10 | Impulse to care for and support them |
| E33 | depth_speed | 1-10 | Pace at which emotional intimacy deepens |
| E34 | push_pull_tension | 1-10 | Intensity of dynamic tension and momentum |
| E35 | reciprocity_felt | 1-10 | Sense of reciprocal engagement (bid-response perspective) |

---

## F. Values/Lifestyle (6 features)

| # | Feature | Scale | Description |
|---|---------|-------|-------------|
| F36 | value_similarity | 1-10 | Alignment of core values |
| F37 | life_goal_alignment | 1-10 | Compatibility of life direction and long-term goals |
| F38 | identity_shared | 0/1 | A personal identity dimension shared between both parties |
| F39 | identity_understanding | 1-10 | Understanding of the shared identity dimension (for non-sharers, willingness to understand) |
| F40 | relationship_seriousness | 1-10 | Orientation toward committed, serious relationships |
| F41 | lifestyle_compatibility | 1-10 | Compatibility of daily living patterns and lifestyle choices |

---

## G. Chemistry/Interaction Quality (6 features)

**Note:** This section has been reframed from "Psychological Dynamics" to emphasize genuine chemistry and interaction quality. Changes reflect a shift from deficit-focused features toward positive interaction markers.

| # | Feature | Scale | Description | Notes |
|---|---------|-------|-------------|-------|
| G42 | complementary_competence | 1-10 | Sense of complementary strengths; feeling they've reached similar capability through different pathways (not deficit-based) | Redefined from "has_what_i_lack" |
| G43 | past_deficit_resonance | 1-10 | Resonance with my past struggles or growth edges | Consolidated from two v1 features |
| G44 | mutual_becoming | 1-10 | Sense of mutual growth and becoming; shared awareness of ongoing transformation (bidirectional, not one-directional) | Redefined from "becoming_visible" |
| G45 | conversation_fun | 1-10 | Pure enjoyment of conversation; foundational chemistry dimension | New in v2 |
| G46 | my_emotional_risk_first | 1-10 | Degree to which I took emotional risk first (Gottman bid initiation perspective) | New in v2 |
| G47 | social_vs_emotional_gap | 1-10 | Size of gap between social competence and emotional expression (socially skilled but emotionally clumsy, or vice versa) | New in v2 |

---

## H. Context (4 features)

| # | Feature | Scale | Description |
|---|---------|-------|-------------|
| H48 | my_loneliness_then | 1-10 | My loneliness level at that time |
| H49 | other_relationship_satisfaction | 1-10 | Satisfaction with existing relationships (N/A if none) |
| H50 | access_frequency | 1-10 | Frequency of physical/digital access and proximity |
| H51 | social_barrier | 1-10 | Social barriers (workplace dynamics, age difference, existing relationships, etc.) |

---

## I. Interaction Signatures (6 features)

**Note:** New section in v2, derived from conversational analysis. Captures specific behavioral patterns of connection.

| # | Feature | Scale | Description | What It Measures |
|---|---------|-------|-------------|-----------------|
| I52 | selection_specificity | 1-10 | Concreteness of reasons they chose me (vague attraction vs. specific articulated reasons) | Whether attraction is grounded in particular qualities |
| I53 | thought_sync_frequency | 1-10 | Frequency of independent thinking alignment (arriving at same conclusions separately) | Cognitive resonance without influence |
| I54 | value_reframe_accepted | 1-10 | Degree to which they actually internalize values I've reflected back | Evidence of genuine value adoption |
| I55 | observes_and_expresses_me | 1-10 | How often they notice and express observations about my external changes | Active attentiveness to my growth |
| I56 | follows_my_thought_jumps | 1-10 | Speed and willingness to track my nonlinear thinking | Capacity for cognitive flexibility in connection |
| I57 | boards_my_proposed_futures | 1-10 | Frequency of enthusiastic engagement with futures I propose | Co-creation and shared vision building |

---

## Target Variables (4)

| # | Feature | Scale | Description |
|---|---------|-------|-------------|
| y1 | attracted | 0/1 | Was I attracted (binary) |
| y2 | attraction_intensity | 1-10 | Intensity of attraction |
| y3 | dated | 0/1 | Did a relationship actually form |
| y4 | relationship_satisfaction | 1-10 | Relationship satisfaction (N/A if no relationship formed) |

---

## Scoring Guide

### Categorical Features (A2: meeting_route)
- school
- work
- app
- social
- online
- friend_intro

### Binary Features (F38: identity_shared)
- 0 = Not shared
- 1 = Shared

### 1-10 Scale Interpretation

- **1-2**: Minimal/not present/not applicable
- **3-4**: Slight/occasional
- **5-6**: Moderate/average
- **7-8**: Strong/frequent
- **9-10**: Extremely strong/almost always

### Special Scales

| Feature | Interpretation |
|---------|-----------------|
| E31 (power_balance) | 5=balanced, 1=I'm weaker, 10=I'm stronger |
| H49 (other_relationship_satisfaction) | Leave blank if no existing relationships |
| A3 (time_to_attraction) | Number of days; can be decimal for same-day |

---

## v1 to v2 Changelog

### Deleted Features (3)

1. Protection instinct → Consolidated into E32 (care_impulse)
2. Deficit trigger → Consolidated into G43 (past_deficit_resonance)
3. Has_what_i_lack → Replaced with G42 (complementary_competence) - reframed rather than deleted

### Redefined Features (3)

| v1 Name | v2 Name | Change | Rationale |
|---------|---------|--------|-----------|
| Self-awareness gap | Competence-self-eval gap (D22) | Narrower focus on skill/awareness mismatch | Captures gap in emotional self-awareness despite high capability |
| Has what I lack (G42) | Complementary competence | From deficit-based to strength-based framing | Reflects different pathways to capability, not lack |
| Becoming visible (G44) | Mutual becoming | From unidirectional to bidirectional | Emphasizes shared growth, not one-person's transformation |

### Section Reframe (1)

- Section G: "Psychological Dynamics" → "Chemistry/Interaction Quality"
  - Reflects shift away from deficit/pathology focus toward positive interaction markers and genuine connection indicators

### New Features (9)

| Category | Features | Count |
|----------|----------|-------|
| G (Chemistry) | G45 (conversation_fun), G46 (my_emotional_risk_first), G47 (social_vs_emotional_gap) | 3 |
| I (Interaction Signatures) | I52-I57 (entire new section) | 6 |
| **Total new** | | **9** |

### Feature Count Evolution

| Metric | v1 | v2 | Change |
|--------|----|----|--------|
| A (Demographics) | 4 | 4 | - |
| B (Physical) | 5 | 5 | - |
| C (Background) | 7 | 7 | - |
| D (Personality) | 11 | 11 | - |
| E (Dynamics) | 8 | 8 | - |
| F (Values) | 6 | 6 | - |
| G (Chemistry) | 5 | 6 | +1 |
| H (Context) | 4 | 4 | - |
| I (Signatures) | - | 6 | +6 new |
| **Total** | **50** | **57** | **+7** |

---
