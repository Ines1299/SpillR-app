import axios from "axios";

export async function getCommentsByEpisodeId(id) {
  try {
    const { data } = await axios.get(
      `https://spillr-be.onrender.com/api/episodes/${id}/comments`,
    );
    return data.comments;
  } catch (error) {
    throw error;
  }
}

export async function getFilteredCommentsByEpisodeId(id, t) {
  console.log("fetching", id, t);
  try {
    const { data } = await axios.get(
      `https://spillr-be.onrender.com/api/episodes/${id}/comments?t=${t}`,
    );
    return data.comments;
  } catch (error) {
    throw error;
  }
}
