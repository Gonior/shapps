// src/stores/content.js
import { writable } from 'svelte/store'


// Get the value out of storage on load.
const stored = localStorage.mode
// or localStorage.getItem('content')

// Set the stored value or a sane default.
export const modeStore = writable(stored || "welcome")

// Anytime the store changes, update the local storage value.
modeStore.subscribe((value) => localStorage.mode = value)
// or localStorage.setItem('content', value)