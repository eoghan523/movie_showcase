import React, { createContext, useState, useContext } from 'react';

const seacrchContext = createContext();

export const useSearch = () => useContext(searchContext);