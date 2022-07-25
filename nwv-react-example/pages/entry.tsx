import React from "react";
import styled from "styled-components";
/**
 * `<Entry>` ('entry')
 * - [Open in Figma](https://figma.com/file/x7RRK6RwWtZuNakmbMLTVH?node-id=2422:10181)
 * - [Open in Grida](https://code.grida.co/files/x7RRK6RwWtZuNakmbMLTVH?node=2422:10181)
 *
 *
 * ---
 * @example
 * ```tsx
 * import React from "react";
 *
 * export default function () {
 *   return (
 *     <>
 *       👇 instanciate widget like below. 👇
 *       <Entry/>
 *     </>
 *   )
 * }
 * ```
 * ---
 * @params {any} props - this widget does not requires props. you can pass custom dynamic props to the widget as you want (on typescript, it will raise type check issues).
 * ---
 * @preview
 * ![](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ff45881-9801-4544-97b6-308cfdedc537)
 * ---
 * @remarks
 * @see {@link https://grida.co/docs} for more information.
 * ---
 * Code generated by grida.co | engine 0.0.1 (Apache-2.0) | Generated code under CC0 (public domain) *This code is free to use, modify, and redistribute. (aknowledgment is not required)*
 *
 *
 * ![Made with Grida](https://bridged-service-static.s3.us-west-1.amazonaws.com/branding/logo/32.png)
 * <!-- Info: Please do not remove this comment unless intended. removing this section will break grida integrations. -->
 * <!-- grida.meta.widget_declaration | engine : 0.0.1 | source : figma://x7RRK6RwWtZuNakmbMLTVH/2422:10181 -->
 */
export function Entry() {
  return (
    <RootWrapperEntry>
      <BigCover>
        <_2022>2022</_2022>
        <NwvLayout>
          <Nwv>NWV</Nwv>
        </NwvLayout>
      </BigCover>
      <AppnameAsH1>Newest World Vibes</AppnameAsH1>
      <Description>
        Vibes More than 30,000 + All around the world. Stay tuned, Stay updated.
      </Description>
      <ActionArea>
        <ButtonMaxWidth400AsButton>Get started</ButtonMaxWidth400AsButton>
      </ActionArea>
    </RootWrapperEntry>
  );
}

const RootWrapperEntry = styled.div`
  min-height: 100vh;
  background-color: white;
  border-radius: 4px;
  position: relative;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
`;

const BigCover = styled.div`
  height: 263px;
  position: absolute;
  left: 0px;
  top: 231px;
  right: 0px;
`;

const _2022 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 292px;
  font-family: Sen, sans-serif;
  font-weight: 800;
  letter-spacing: -4px;
  line-height: 90%;
  text-align: center;
  position: absolute;
  left: calc((calc((50% + -71px)) - 336px));
  top: calc((calc((50% + 0px)) - 132px));
`;

const NwvLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 10px 28px;
  position: absolute;
  left: 0px;
  top: 226px;
  right: 0px;
  height: 42px;
`;

const Nwv = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 24px;
  font-family: Sen, sans-serif;
  font-weight: 800;
  line-height: 90%;
  text-align: right;
  width: 319px;
  flex: 1;
`;

const AppnameAsH1 = styled.h1`
  color: black;
  text-overflow: ellipsis;
  font-size: 49px;
  font-family: Sen, sans-serif;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 90%;
  text-align: left;
  width: 296px;
  position: absolute;
  left: 40px;
  top: 65px;
`;

const Description = styled.span`
  color: rgb(164, 164, 164);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 296px;
  position: absolute;
  left: calc((calc((50% + -2px)) - 148px));
  bottom: 193px;
`;

const ActionArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 0px 40px;
  position: absolute;
  left: 0px;
  top: 676px;
  right: 0px;
  height: 53px;
`;

const ButtonMaxWidth400AsButton = styled.button`
  background-color: black;
  border-radius: 4px;
  padding: 16px;
  color: white;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  flex: 1;

  :hover {
    opacity: 0.8;
  }

  :disabled {
    opacity: 0.5;
  }

  :active {
    opacity: 1;
  }

  :focus {
  }
`;