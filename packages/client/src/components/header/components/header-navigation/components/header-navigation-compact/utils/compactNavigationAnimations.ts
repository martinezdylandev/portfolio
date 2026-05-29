export const navMenuVariants = {
   open: {
      opacity: [0, 0, 1],
      left: 0,
      transition: {
         opacity: { times: [0, 0.5, 1] },
      },
   },
   closed: {
      opacity: [1, 1, 0],
      left: -170,
      transition: {
         opacity: { times: [0, 0.95, 1] },
      },
   },
};
