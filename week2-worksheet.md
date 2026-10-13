# Week 2 Lab Worksheet

Name: Emirhan Solmaz
Program: Software Engineering
Level I aimed for today: Core

## Before you run the lie

What do you expect `live done` to print, and why?
 It will print undefined because live is typed as Task.

## After you run the lie

lecture example, title: undefined
live title: delectus aut autem
live done: undefined
Why did TypeScript allow this?

## typecheck

Paste the error from `src/honest.ts` before you comment the line out.
src/honest.ts:11:7 - error TS2322: Type 'unknown' is not assignable to type '{ title: string; }'.

11 const task: CreateTask = payload;
 

## Activity 1

What printed for todo 99999? 
 404
What printed for the dead address (the network error)? 
 Network error: TypeError: fetch failed
Which of those two did `fetch` throw for?  
 The dead address.

## Activity 3 — Outside feed

Paste the form boundary output (saved / refused lines).
 – form boundary –
saved: { title: 'Design database schema', status: 'doing', projectId: 1, dueDate: '2026-10-20' }
refused: String must contain at least 1 character(s)
refused: Invalid enum value. Expected 'open' | 'doing' | 'done', received 'finished'
refused: Expected number, received '1'
refused: Required

Paste the outside-feed output.
outside feed:
 imported: { ok: true, task: { title: 'delectus aut autem', status: 'open', projectId: 1 } }
missing todo: null
In one sentence: why was the raw to-do refused by `createTask` even though it has a title?
 Because it lacked required fields like projectId and had completed instead of status

## Exit question

Where is the boundary in this program, and what do you trust after the data has crossed it?
 The boundary is where Zod schemas (safeParse) validate unknown data. After crossing it, we fully trust the validated type and shape.
