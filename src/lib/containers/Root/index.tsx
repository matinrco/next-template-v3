"use client";

import { Box, Center, Title, Text, useMantineTheme } from "@mantine/core";
import { useScopedI18n } from "@/lib/hooks/I18n/client";

export const Root = () => {
    const theme = useMantineTheme();
    const scopedT = useScopedI18n("root.page");

    return (
        <Center w="100%" h="100vh" bg="gray.2">
            <Box>
                <Title
                    ta="center"
                    order={1}
                    c="dark.4"
                    size={`calc(${theme.fontSizes.xl} * 3)`}
                    style={{ textTransform: "uppercase" }}
                >
                    matin
                </Title>
                <Text ta="center">{scopedT("author")}</Text>
            </Box>
        </Center>
    );
};
