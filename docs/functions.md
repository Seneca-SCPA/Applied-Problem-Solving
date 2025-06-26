---
id: functions
title: Functions
sidebar_position: 5
description: Modularity with functions
---

# Modularity with Functions

## Overview

<!--
Introduce functions and closed-boxes.
-->

Modularity is an important aspect of programming as it provides flexibility in orchestrating logic needed for efficient reusability and efficient management of solution components. The most common component of modularity is the use of **functions**.

Functions represent algorithms comprised of several logical steps which perform a specific task. Functions are defined **once and in one place**. This is what makes it efficient and simpler to manage since modifications and trouble shooting bugs directs you to a single source.

When it comes time to construct a complete solution, it is nice to be able to reference functions which do all the work (hiding the details) and simplifies the overall readability of the instructions so long as good naming practices have been applied.

Sometimes access to the composition of a function may not be possible. When you don't have access to the details of a function we refer to this as a **closed-box**.

:::tip Reminder
As mentioned in the [Computational Thinking](./computational-thinking.md) sections on:

- [Decomposition](./computational-thinking.md#decomposition): Functions are mostly identified when going through the process of breaking things down into smaller logical parts.

- [Pattern Recognition](./computational-thinking.md#pattern-recognition): Is another area where functions may be identified where you can extract a common piece of logic that can be reused in multiple places throughout the solution.

- [Abstraction](./computational-thinking.md#abstraction): Usually based on a pattern of functions where the concept is the same and can be combined to simplify the usability of a single function.
  :::

## Closed-Boxes

There will be times when we need to use 3rd-party logic (known as **API's** : Application Programming Interface) or other prepared logic from **system library functions** where we **don't have access to the details of how they work**.

These functions are known as "**closed-boxes**" (formerly "black boxes"). Closed-box functions are like "magic" because you call them and they do what you expect without explicitly knowing how it performed the task. Sometimes this can be a problem because if there is a bug (error) in that piece of logic, there is nothing you can do to fix it other than to redefine your own version of that logic in your own composed function.

you simply "CALL" them when needed and you do not have to describe how the process works.

:::tip How-To
If you are calling a closed-box function from a flowchart, use the [striped rectangle symbol](./documenting-logic.md#graphical-symbols) to represent a complex function.
:::

## High-Level Functions

High-level functions are usually highly abstracted in that they can represent a lot of functionality/logic usually because this type of function will call many other functions to complete its task. This is like seeing the solution from "a birds eye view".

One such function that is commonly required in many programming languages is "**main**" which behaves as the entry-point to the application (or where the logic begins and typically ends).

:::caution note
For the purposes of these notes, we'll be designating a **`flowchart` to always represent this higher-level view of the overall solution**. The directive of a flowchart is to describe an overall set of instructions in a simple to understand format for non-technical persons, so it is a natural and suitable application of a flowchart.
:::

## Low-Level Functions

Unlike high-level functions, lower-level functions are a lot more focused and detailed on a task that is highly limited in scope - most functions fit this category and are constructed to be reusable or to remove complexity from other larger scoped functions.

:::caution note
For the purposes of these notes, we'll be designating **`pseudo code` to always represent these lower-level detailed parts of the solution algorithm**.
:::

## Passing Information

Functions usually require information to be provided or sent to it to do its task. When a function requires information, it is constructed with one or more **parameters**. Parameter is a fancy term used that essentially means a variable. For example, if we create a function that is responsible for displaying the date and time in a standard ISO 8601 format (YYYY-MM-DD HH:MM:SS), the function would require all six of those specific parts to be sent:

```
DisplayDateTime (year, month, day, hour, minute, second)
```

The comma delimited list of the date and time parts are the **parameters**. The parameters act as variables which can be used in the function logic to access the values sent to the function.

When it comes time to use this function, we will **CALL** it and supply it with the information it requires (we call this "passing" data to a function) in the form of **arguments**. An argument is a value sent to a function.

Since the `DisplayDateTime` function has **six parameters**, we will need to send **six arguments** in the order it is expecting it:

```
CALL DisplayDateTime (2025, 10, 25, 8, 53, 45)
```

Each argument sent to the function will be assigned to the corresponding parameter variable.

The expected outcome of this function call, would be to display the date time data as:

```
2025-10-25 08:53:45
```

## Returning Information

Explain how to return data from a function in two possible ways:

1. Explicitly using "return"
2. Implicitly using the argument variables

### Explicit Return

Explain how to return explicitly - use return

### Implicit Return

Explain how to return implicitly - via argument(s)
