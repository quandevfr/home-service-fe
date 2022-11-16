import React from 'react';
import './ChatBoxUser.scss';
import { FaTimes, FaTelegramPlane } from 'react-icons/fa';
import { useState } from 'react';

const ChatBoxUser = () => {
  const [message, setMessage] = useState('');

  const chatBoxSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    alert(message);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessageEnter = (e) => {
    if (e.key === 'Enter') {
      setMessage('');
      alert(message);
    }
  };

  return (
    <div className='chatBox'>
      <div className='chatBoxHeader'>
        <div className='chatBoxAdminInfo'>
          <div className='chatBoxAdminAvatar'>
            <img
              src='https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
              alt='adminAvatar'
              className='chatBoxAdminAvatarImg'
            />
          </div>
          <div className='chatBoxAdminName'>Admin</div>
          <div className='chatBoxAdminStatus'></div>
        </div>
        <div className='chatBoxClose'>
          <FaTimes className='chatBoxCloseIcon' />
        </div>
      </div>
      <div className='chatBoxBody'>
        <div className='chatBoxBodyContent'>
          <div className='chatBoxAdminWrap'>
            <div className='chatBoxAdminAvatar'>
              <img
                src='https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                alt='adminAvatar'
                className='chatBoxAdminAvatarImg'
              />
            </div>
            <div className='chatBoxAdminMessage'>Message of Admin</div>
          </div>
          <div className='chatBoxUserWrap'>
            <div className='chatBoxUserMessage'>Message of User</div>
            <div className='chatBoxUserAvatar'>
              <img
                src='https://images.unsplash.com/photo-1657667779190-8e90af2d9f3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
                alt='userAvatar'
                className='chatBoxUserAvatarImg'
              />
            </div>
          </div>
          <div className='chatBoxAdminWrap'>
            <div className='chatBoxAdminAvatar'>
              <img
                src='https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                alt='adminAvatar'
                className='chatBoxAdminAvatarImg'
              />
            </div>
            <div className='chatBoxAdminMessage'>Message of Admin</div>
          </div>
          <div className='chatBoxUserWrap'>
            <div className='chatBoxUserMessage'>Message of User</div>
            <div className='chatBoxUserAvatar'>
              <img
                src='https://images.unsplash.com/photo-1657667779190-8e90af2d9f3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
                alt='userAvatar'
                className='chatBoxUserAvatarImg'
              />
            </div>
          </div>
          <div className='chatBoxAdminWrap'>
            <div className='chatBoxAdminAvatar'>
              <img
                src='https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                alt='adminAvatar'
                className='chatBoxAdminAvatarImg'
              />
            </div>
            <div className='chatBoxAdminMessage'>Message of Admin</div>
          </div>
        </div>
      </div>
      <div className='chatBoxFooter'>
        <div className='chatBoxForm'>
          <div className={message ? 'chatBoxFieldInput' : 'chatBoxFieldInputFull'}>
            <input
              type='text'
              className='chatBoxInput'
              placeholder='Nội dung tin nhắn...'
              value={message}
              onChange={handleMessageChange}
              onKeyPress={handleMessageEnter}
            />
          </div>
          {message && (
            <div className='chatBoxBtnSend' onClick={chatBoxSubmit}>
              <FaTelegramPlane className='chatBoxBtnSendIcon' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBoxUser;
