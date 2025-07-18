---
id: data-collections
title: Data Containers & Collections
sidebar_position: 8
description: Data Collections
---

# Data Containers & Collections

## Overview

The simplest form of a data **container** is an array. The concept of an array is a variable capable of storing many values. All programming languages support this simplest form of a container, but many object-oriented languages such as C++, C#, Java, Python, etc., have additional variations mostly referred to as **collections** which provide an additional layer of operations (functions) to help simplify the navigation and management of the data. For the sake of these notes, and to maintain the language-agnostic theme, we will merge the concepts of these two major types of [data representation](./computational-thinking.md#data-representation) as one and refer to it as a **collection** for simplification and consistency.

## Example Scenario

It is very common to have an application to manage information/data that supports many values which may or may not have a known limit to the number of pieces of data it needs to maintain. For example, if an application is required to manage student ID's, we would need the application to be able to adapt to the number of student ID data (which could also involve the adding and removing of students as part of the features of the application).

We certainly would not want to represent each student ID number as a separate variable (such as: `id1`, `id2`, `id3`, etc..) since we would not know how many variables to declare in advance and how would we be able to add more at runtime? Ideally, we need a way to simplify how we can represent data as a **list**. An important feature for this type of data representation would need to include the ability to adapt to changes in the number of list items (expanding or contracting in size). This is where the concept of a collection comes in!

:::tip ONE VARIABLE!
Instead of declaring MANY variables for each student ID (and given the impossibility of how we could even manage varying number of students), we can use a **SINGLE collection variable** to represent many student ID's (as a list)!

We can declare a **single collection variable**: `studentIDs` and by referring to this one variable, we can **access many student ID's**.
:::

Let's define the process for an application to manage the creation and adding of student ID's to a collection variable (where the user can enter as many ID's as desired) with the functionality to display the data stored in the collection after the data is input. We will use a flowchart to orchestrate the main flow and pseudo code to describe the detailed parts accordingly.

## Flowchart

This is the main function and logic flow.

![Image of the main flowchart calling the pseudo code detailed AddAnotherStudent and AddStudent functions as required](../static/img/collections.png)

## Pseudo Code

Function: `AddAnotherStudent()`

- Arguments: NONE
- Returns:
  - **TRUE** for "YES"
  - **FALSE** for "NO"

```
AddAnotherStudent()

1. DECLARE:
      response = FALSE

2. DISPLAY:
      "Do you want to add a student ID?"
      [BUTTON: YES]       [BUTTON: NO]

3. What button was pressed?
      A) YES:
            1) ASSIGN: response = TRUE
      B) NO:
            1) ASSIGN: response = FALSE

4. RETURN: response

5. End
```

Function: `AddStudent (studentIDs)`

- Arguments: studentIDs (collection variable)
- Returns: Nothing

```
AddStudent (studentIDs)

1. DECLARE:
      newStudentID

2. DISPLAY:
      "Enter a new student ID:"

3. ASSIGN: newStudentID = [User entered value]

4. ADD newStudentID to studentIDs

5. DISPLAY:
      "Student ID added!"

6. End
```

Function: `DisplayStudentData (studentIDs)`

- Arguments: studentIDs (collection variable)
- Returns: Nothing

```
DisplayStudentData (studentIDs)

1. DECLARE:
      tmpID
      itemCount = 0

2. DISPLAY:
      "Here are the stored student ID's:"

3. ASSIGN: tmpID = next item from studentIDs

4. Is tmpID empty?
      A) NO:
            1. DISPLAY:
                  "[tmpID]" (newline)
            2. ASSIGN: itemCount + 1
            3. Repeat from step #3

5. DISPLAY:
      "There are [itemCount] Student ID's stored."

6. End
```
