import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  children: string;
};
const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 350;
  if (!children) return null;
  if (children.length <= limit) return <div>{children}</div>;

  const toShow = isExpanded ? children : `${children.slice(0, limit)}...`;
  return (
    <Text>
      {toShow}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme={"whatsapp"}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </Button>
    </Text>
  );
};
export default ExpandableText;
