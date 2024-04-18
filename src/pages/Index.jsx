import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={5}>
        Frequently Asked Questions
      </Text>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is React?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How do I install Chakra UI?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>You can install Chakra UI by running `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion` in your project directory.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What are hooks in React?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Hooks are functions that let you “hook into” React state and lifecycle features from function components. They do not work inside classes — they let you use React without classes.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Index;
