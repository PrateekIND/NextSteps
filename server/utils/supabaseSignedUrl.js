// backend/utils/supabaseSignedUrl.js
import supabase from "../config/supabase.js";
import { v4 as uuidv4 } from "uuid";

/**
 * Generate a signed upload URL (short-lived) and return:
 *  { signedUrl, path }
 * - signedUrl: URL the frontend PUTs the file to.
 * - path: the storage path inside the bucket (store this in MongoDB and use getPublicUrl later).
 *
 * Note: createSignedUploadUrl takes path and expiresIn (seconds).
 */
export const generateSignedUploadUrl = async (fileName, folder = "uploads", expiresIn = 120) => {
  try {
    const path = `${folder}/${uuidv4()}-${fileName}`;

    const bucket = process.env.SUPABASE_STORAGE_BUCKET || "career-files";

    // create a signed upload url valid for expiresIn seconds
    const { data, error } = await supabase.storage.from(bucket).createSignedUploadUrl(path, expiresIn);

    if (error) {
      throw error;
    }
    // data.signedUrl is the URL the client should PUT the file to
    return { signedUrl: data.signedUrl, path, bucket };
  } catch (err) {
    throw err;
  }
};

/**
 * Get the public URL from a storage path. If you require private files,
 * change this to createSignedUrl for downloads instead.
 */
export const getPublicUrl = (path) => {
  const bucket = process.env.SUPABASE_STORAGE_BUCKET || "career-files";
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data?.publicUrl || null;
};
