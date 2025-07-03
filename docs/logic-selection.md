---
id: selection
title: Logic-Selection (decision)
sidebar_position: 6
description: Logic-Selection (decision)
---

# Logic - Selection

## Overview

Computers programs are not very useful without the ability to adjust to changing conditions. A mechanism is therefore needed to enable programs the ability to evaluate when to change logical direction which can include executing specific logic and/or to avoid specific logic.

The concept of **Selection** is what provides programs the ability to apply logical decisions which can alter the execution sequence. There are several variations of selection (especially when coding it in a specific computer language), however the main three logical flows will be examined here.

## Optional Selection

![Image of a line branching based on a question mark](../static/img/selectionOptionalTitle.png)

Optional selection provides a program the ability to execute **additional logic** to do something **only if one or more conditions are determined TRUE**, otherwise, the main program logic continues as normal.

Let's review part of a program where the total yearly rainfall is being evaluated to see if it has set a new record. The program should update the highest record only when the yearly rainfall amount is determined to be more than the last known record. The logic to update the record should only occur if the yearly rainfall has been determined to be greater than the last known record. If the yearly rainfall is 325 mm and the last known record is 310 mm, we should expect the logic to update the record to the new value, otherwise, do nothing (continue with the normal program logic).

### Flowchart

Here is how it would be done in a flowchart:

![Image of a flowchart applying a diamond to indicate selection](../static/img/selectionOptional.png)

:::caution NOTE

- Notice the **DIAMOND shape** for the **selection decision**.
- The question is using **concise non-technical language**.
- The technical part (optional) has less emphasis and is in smaller font.
- Something "extra" only occurs if it is evaluated to TRUE (yes).
  :::

### Pseudo Code

Here is the pseudo code equivalent:

```
Function: main

1. DECLARE
      yearlyMM = 325
      recordMM = 310

2. DISPLAY:
      "Current yearly rainfall:   <yearlyMM> mm
       Highest recorded rainfall: <recordMM> mm"

3. Is yearlyMM > recordMM ?
      A. YES:
            1. ASSIGN: recordMM = yearlyMM
            2. DISPLAY:
                  "A new yearly record has been set!"

4. ... Continue with program logic ...
5. End
```

The program will **only (optionally)** update the record and display a message indicating a new record was set **if the current year's rainfall is higher** than the previous set record. The expression in **step #3 is "selection"** where a `TRUE` or `FALSE` condition is being evaluated and based on that determination, extra logic may be executed.

:::caution NOTE

- Notice the text 'label' `YES:` used to identify the answer to the selection question?
- Notice the logic indentation (`TAB`) consistency of the pseudo code?
- Notice how the enumeration changed from numbers (1...2...) to characters (a...b...) when the 'inner logic' is sequenced?

It is important to maintain easy to read logic in pseudo code especially when **nested statements are involved**.

The nested statements in this example is where the group of statements are placed under the `YES:` logic path.
:::

## Alternative Selection

![](../static/img/selectionAlternativeTitle.png)

Alternative selection is like a 'Y' in the road where **a decision must be made** and no matter what **only one of two different logic paths** will be executed but **not both**.

Continuing with the preceding example, the application will now display an outcome no matter what. **EITHER** a new rainfall record was set, **OR** a new record was NOT set.

### Flowchart

Here is how it would be done in a flowchart:

![](../static/img/selectionAlternative.png)

### Pseudo Code

And here is how it would be done in pseudo code:

```
Function: main

1. DECLARE
      yearlyMM = 325
      recordMM = 310

2. DISPLAY:
      "Current yearly rainfall:   <yearlyMM> mm
       Highest recorded rainfall: <recordMM> mm"

3. Is yearlyMM > recordMM ?
      A. YES:
            1. ASSIGN: recordMM = yearlyMM
            2. DISPLAY:
                  "A new yearly record has been set!"
      B. NO :
            1. DISPLAY:
                  "Did NOT set a new record!"

4. ... Continue with program logic ...
5. End
```

## Multiple Alternative Selection

![](../static/img/selectionAlternativeMultiTitle.png)

Multiple alternative selection is like an 'E' in the road where **a decision must be made** and no matter what **only one** of **THREE or more** different logic paths will be executed but **not all**.

Continuing with the preceding example, the application will display an outcome no matter what for **only one** of these **three possibilities**:

1. A **new rainfall record** was set.
2. The current year rainfall **TIED** with the highest record.
3. A new record was **NOT set**.

### Flowchart

Here is how it would be done in a flowchart:

![](../static/img/selectionAlternativeMulti.png)

### Pseudo Code

And here is how it would be done in pseudo code:

```
Function: main

1. DECLARE
      yearlyMM = 325
      recordMM = 310

2. DISPLAY:
      "Current yearly rainfall:   <yearlyMM> mm
       Highest recorded rainfall: <recordMM> mm"

3. What is the state of the current year rainfall?
      A. NEW RECORD SET (yearlyMM > recordMM):
            1. ASSIGN: recordMM = yearlyMM
            2. DISPLAY:
                  "A new yearly record has been set!"

      B. TIED RECORD (yearlyMM == recordMM):
            1. DISPLAY:
                  "TIED the highest record!"

      C. LESS THAN THE RECORD (yearlyMM < recordMM) :
            1. DISPLAY:
                  "Did NOT set a new record!"

4. ... Continue with program logic ...
5. End
```

## Nested Selection

![](../static/img/selectionNestedTitle.png)

Nesting is a way to sequence statements or logic constructs such as selection and iteration **within another logical construct**. It is a way to group statements or other logic under a dependency. In the case of selection, this would mean anything intended to execute when the selection statement is evaluated to TRUE, would be nested within the limits of the selection.

Using the preceding example on yearly rainfall, let's say we want to have different levels of "excitement" when a new rainfall record is determined. If the old record is beat within 10 mm (inclusive), then we want to state: "A new record has been set!", but when it is beaten by more than 10 mm, we want it to state: "WOW! The old record was blown away and a new record has been set!".

Implementing this, would require logic to be placed within the section where it is determined the record was beaten - this would be nested selection!

### Flowchart

![](../static/img/selectionNested.png)

The golden highlighted section encompasses the **nested selection** which is only executed if the parent selection that tests for a beaten record evaluates to TRUE.

### Pseudo Code

```
Function: main

1. DECLARE
      yearlyMM = 325
      recordMM = 310
      delta

2. DISPLAY:
      "Current yearly rainfall:   <yearlyMM> mm
       Highest recorded rainfall: <recordMM> mm"

3. What is the state of the current year rainfall?
      A. NEW RECORD SET (yearlyMM > recordMM):
            1. ASSIGN: delta = yearlyMM - recordMM
            2. ASSIGN: recordMM = yearlyMM
            3. Is the record beaten by more than 10mm?
                  A. YES (delta > 10):
                        1. DISPLAY:
                              "WOW! The old record was blown away and a new record has been set!"
                  B. NO:
                        1. DISPLAY:
                              "A new yearly record has been set!"

      B. TIED RECORD (yearlyMM == recordMM):
            1. DISPLAY:
                  "TIED the highest record!"

      C. LESS THAN THE RECORD (yearlyMM < recordMM) :
            1. DISPLAY:
                  "Did NOT set a new record!"

4. ... Continue with program logic ...
5. End
```

Step `3.` is the **outer selection** (parent) and sub-step `3.A.3.` within the "NEW RECORD SET" section is the **nested selection**. Nesting is only executed if the parent (outer) dependency is evaluated to TRUE.

## Testing

As referred to in the computational thinking - [testing](./computational-thinking.md#testing) section, "what-if" scenarios are used to help test the logic and expected outcomes. **Selection is pivotal to controlling program execution** to take the necessary logic paths required to address all reasonable possibilities and certainly the expected paths to address the problem.

Semantic failures are often directly tied to selection logic, so it is important you build strong selection skills - these skills will also help you be a more efficient and effective problem solver and programmer.
