import React, { useState } from "react";
import { useChannel } from "@ably-labs/react-hooks";

import Typography from "@mui/material/Typography";

import CommentsList from "./CommentsList";
import AddCommentSection from "./AddCommentSection";

export default function Comments({ initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [channel] = useChannel("comment-channel", (message) => {
    setComments((comments) => {
      return [...comments, message.data];
    });
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Comments ({comments.length})
      </Typography>
      <CommentsList comments={comments} />
      <AddCommentSection />
    </React.Fragment>
  );
}
