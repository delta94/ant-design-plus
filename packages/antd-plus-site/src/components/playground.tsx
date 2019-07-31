import * as React from 'react';
import { SendCode } from '@alitajs/antd-plus';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const scope = { SendCode };

interface PlaygroundProps {
  code?: any
}

const Playground: React.FC<PlaygroundProps> = (props) => {
  const { code } = props;
  return (
    <section>
      <LiveProvider
        code={`
          () => {
            const [start, setStart] = React.useState(false);

            function handleClick(c) {
              setStart(true);
            }

            return (
              <SendCode
                start={start}
                onClick={handleClick}
              />
            )
          }
         `
        }
        scope={scope}
      >
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </section>
  )
};

export default Playground
