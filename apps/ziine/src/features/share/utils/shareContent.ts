'use client';

interface ShareContentParams {
  title: string;
  text?: string;
  url: string;
  onCopySuccess?: () => void;
  onCopyError?: () => void;
}

export const shareContent = ({ title, text, url, onCopySuccess, onCopyError }: ShareContentParams) => {
  try {
    if (window.navigator.share) {
      window.navigator.share({
        title,
        text,
        url,
      });
    } else if (window.navigator.clipboard) {
      window.navigator.clipboard.writeText(`${title}\n${url}`);
      onCopySuccess?.();
    }
  } catch (err) {
    onCopyError?.();
    console.error(err);
  }
};

export const copyText = ({
  text,
  onCopyError,
  onCopySuccess,
}: Required<Pick<ShareContentParams, 'text' | 'onCopyError' | 'onCopySuccess'>>) => {
  try {
    window.navigator.clipboard.writeText(text);
    onCopySuccess();
  } catch (err) {
    onCopyError();
    console.error(err);
  }
};
