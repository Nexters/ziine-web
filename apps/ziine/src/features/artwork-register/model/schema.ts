import { z } from 'zod';

const REQUIRED_ERROR_MESSAGE = '*필수 입력 필드입니다';
const MAX_ERROR_MESSAGE = '*최대 글자 수를 확인해 주세요';
const NUMBER_TYPE_ERROR_MESSAGE = '*숫자로만 입력해 주세요';

export const artworkSchema = z.object({
  artworkImageUrl: z.string({ required_error: REQUIRED_ERROR_MESSAGE }),
  title: z.string({ required_error: REQUIRED_ERROR_MESSAGE }).max(80, { message: MAX_ERROR_MESSAGE }),
  width: z
    .string()
    .min(1, { message: REQUIRED_ERROR_MESSAGE })
    .refine((val) => !isNaN(Number(val)), { message: NUMBER_TYPE_ERROR_MESSAGE }),
  height: z
    .string()
    .min(1, { message: REQUIRED_ERROR_MESSAGE })
    .refine((val) => !isNaN(Number(val)), { message: NUMBER_TYPE_ERROR_MESSAGE }),
  material: z.string({ required_error: REQUIRED_ERROR_MESSAGE }).max(50, { message: MAX_ERROR_MESSAGE }),
  artistName: z.string({ required_error: REQUIRED_ERROR_MESSAGE }),

  // Optional fields
  artistInfo: z.optional(z.string()),
  education: z.optional(z.string()),
  exhibitions: z.optional(z.array(z.object({ title: z.string(), exhibitionDate: z.string() }))),
  contacts: z
    .optional(
      z.array(
        z.object({
          type: z.enum(['INSTAGRAM', 'WEBSITE']),
          value: z.string(),
        }),
      ),
    )
    .default([]),
  email: z.optional(z.string()),
  emailOption: z.optional(z.string()),
});
