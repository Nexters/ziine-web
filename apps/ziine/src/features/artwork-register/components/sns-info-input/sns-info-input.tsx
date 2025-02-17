'use client';

import { IconInput } from '@ziine/design';
import { ChangeEvent, useState } from 'react';

interface SnsInfoInputProps {
  instagramValue: string;
  linkValue: string;
  onInstagramChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLinkChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SnsInfoInput = ({ instagramValue, linkValue, onInstagramChange, onLinkChange }: SnsInfoInputProps) => {
  const [isFocusedInstagram, setIsFocusedInstagram] = useState(false);
  const [isFocusedLink, setIsFocusedLink] = useState(false);

  return (
    <IconInput
      text='홍보 채널'
      description={''}
      placeholder={['@인스타그램 아이디', '비핸스 등 웹사이트 링크']}
      value={[instagramValue, linkValue]}
      onChangeInstagramId={onInstagramChange}
      onChangeLink={onLinkChange}
      instagramIconName={isFocusedInstagram || instagramValue.length > 0 ? 'instagram_color' : 'instagram_gray'}
      linkIconColor={isFocusedLink || linkValue.length > 0 ? 'grayscale.0' : 'grayscale.600'}
      linkIconName={'link'}
      onInstagramFocus={() => setIsFocusedInstagram(true)}
      onInstagramBlur={() => setIsFocusedInstagram(false)}
      onLinkFocus={() => setIsFocusedLink(true)}
      onLinkBlur={() => setIsFocusedLink(false)}
    />
  );
};
