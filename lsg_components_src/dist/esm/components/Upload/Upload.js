import * as React from 'react';
import { UploadPresentation } from './shared/UploadPresentation.js';

const Upload = (props) => React.createElement(UploadPresentation, { ...props });
Upload.displayName = "Upload";

export { Upload };
