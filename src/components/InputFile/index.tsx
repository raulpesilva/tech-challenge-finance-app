import { Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Button } from '../shared/Button';
import styles from './styles.module.scss';

interface InputFileProps {
  id: string;
  name: string;
  label: string;
  className?: string;
  onInput?: (file: File) => void;
  accept?: string;
}

export const InputFile = ({
  id,
  name,
  label,
  className,
  onInput,
  accept = 'image/png, image/jpeg',
}: InputFileProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || !files.length) return;

    const [selectedFile] = Array.from(files);
    setFile(selectedFile);
    onInput?.(selectedFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFile);
    fileReader.onload = (e) => e.target?.result && setImage(e.target.result as string);
  };

  const handleRemove = () => {
    setFile(null);
    setImage(null);
  }

  return (
    <div className={className}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input type='file' id={id} className={styles.input} onInput={handleInput} accept={accept} multiple={false} />
      {!!image && <input type='hidden' name={name} value={image} />}
      {!!image && <img src={image as string} alt={file?.name} className={styles.image} />}
      {file && <Button onClick={handleRemove} variant='outlined' color='error'>Remover</Button>}
      {file && (
        <Typography variant='caption' color='text' className={styles.fileName}>
          {file.name}
        </Typography>
      )}
    </div>
  );
};
