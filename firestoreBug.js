In a Firebase project, I encountered an issue where data wasn't being written to Firestore correctly.  The issue appeared intermittently and only on certain devices, seemingly at random. The write operation didn't throw any errors, yet the data wouldn't appear in Firestore.  I checked my security rules and they appeared correct, allowing all writes for simplicity during development. The code was straightforward, using `set()` with the proper collection and document paths. No error handling was catching any exceptions, and logs showed no indication of failure, which made debugging particularly challenging.