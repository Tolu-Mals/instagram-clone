import { chakra } from "@chakra-ui/react";

export const Wrapper = chakra("div", {
  baseStyle: {
    borderBottom: "1px solid var(--chakra-colors-gray-400)",
    height: "53px",
    backgroundColor: { base: '#fff', md: 'unset' },
  },
});

export const Nav = chakra("nav", {
  baseStyle: {
    display: { base: "none", md: "flex" },
    gap: "22px",
  },
});

export const MobileNav = chakra("nav", {
  baseStyle: {
    display: { base: "flex", md: "none" },
    gap: "22px",
  },
});

export const BottomNav = chakra("nav", {
  baseStyle: {
    display: { base: "flex", md: "none" },
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingX: '16px',
    borderTop: '1px solid var(--chakra-colors-gray-400)',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50px',
    zIndex: 10,
  },
});

