import { createRoot } from 'react-dom/client';
import { MantineProvider, Title } from "@mantine/core";

import '@mantine/core/styles.css';

function ExampleGraphic() {
    return (
        <>

        <div>Example</div>

        </>
    )
}
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<ExampleGraphic />);