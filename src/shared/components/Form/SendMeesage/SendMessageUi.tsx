import React, { FormEventHandler } from 'react';
import StyledButton from 'shared/components/Button/Styles';
import Form from 'shared/components/Form';
import TextInput from 'shared/components/Form/TextInput';
import StyledWrapper from 'shared/components/Wrappers/Styles';
import TextArea from '../TextArea';

interface Props {
  data: any;
  updateData: Function;
  handleSubmit: FormEventHandler;
  loading: boolean;
}

const SendMessageUi: React.FC<Props> = (props) => {
  const { data, updateData, handleSubmit, loading } = props;
  return (
    <Form
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '35px 25px',
      }}
      onSubmit={handleSubmit}>
      <StyledWrapper className="form-row" direction="row" justify="start">
        <TextInput
          width="98%"
          placeholder="Your name"
          name="title"
          value={data.title}
          onChange={updateData}
          type="text"
          error={null}
        />
        <TextInput
          width="98%"
          style={{ marginLeft: '1em' }}
          placeholder="Your email"
          name="email"
          value={data.email}
          onChange={updateData}
          type="email"
          error={null}
        />
      </StyledWrapper>
      <StyledWrapper
        style={{
          width: '100%',
        }}
        align="start"
        className="form-row">
        <TextInput
          width="100%"
          placeholder="Subject"
          name="subject"
          value={data.subject}
          onChange={updateData}
          type="text"
          error={null}
        />
      </StyledWrapper>
      <StyledWrapper align="start" className="form-row">
        <TextArea
          width="100%"
          placeholder="Message"
          name="message"
          value={data.message}
          onChange={updateData}
          error={null}
        />
      </StyledWrapper>

      <StyledWrapper direction="row" justify="center" className="form-row">
        <StyledButton
          bg="linear-gradient( 21deg, #8639b9 -76%, #682696 -76%, #692594 -76%, #93246d -62%, #b6234c -48%, #d12233 -34%, #e42221 -19%, #f02216 -4%, #f42213 11%, #f8b04a 98% )"
          color="white"
          type="submit">
          Send Message
        </StyledButton>
      </StyledWrapper>
    </Form>
  );
};

export default SendMessageUi;
