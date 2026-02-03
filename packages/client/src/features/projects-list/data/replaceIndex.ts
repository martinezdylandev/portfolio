const replaceIndex = (index: number, projectLetters: string[]) => {
   const replacedIndex = (index + 1) % projectLetters.length;
   return replacedIndex;
};

export default replaceIndex;
