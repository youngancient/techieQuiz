

export const compVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.5,
      },
    },
  };


  // work on this animation
export const OptionVariants = {
  initial : {
    scale : 1,
  },
  final : {
    scale : 1.1,
    // scaleX : 0,
    transition: {
      duration: 0.4,
    }
  }
}