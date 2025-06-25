import React, { createContext, useContext, useState, useEffect } from 'react';

const BookmarksContext = createContext();

export function BookmarksProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('bookmarks');
    if (stored) setBookmarks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (user) => {
    setBookmarks((prev) => prev.some(u => u.id === user.id) ? prev : [...prev, user]);
  };
  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter(u => u.id !== id));
  };
  const isBookmarked = (id) => bookmarks.some(u => u.id === id);

  return (
    <BookmarksContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarksContext() {
  return useContext(BookmarksContext);
} 