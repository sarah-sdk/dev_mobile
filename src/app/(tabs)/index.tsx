import { useQuery } from "@tanstack/react-query";
import { fetchMockEvents } from "@/data/generateMockEvents";
import Box from "@/components/Box";
import Text from "@/components/Text";

export default function Index() {
  const { data, isPending, isError, refetch, isRefetching } = useQuery({
    queryKey: ["events"],
    queryFn: () => fetchMockEvents({ simulatedDelayMs: 5000, count: 10 }),
  });
  
  return (
    <Box>
      <Text>Hello word</Text>
    </Box>
  );
}