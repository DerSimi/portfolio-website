from PIL import Image
import numpy as np

img1_path = "pic1.png"
img2_path = "pic2.png"
output_path = "diagonal_split.png"

img1 = Image.open(img1_path).convert("RGBA")
img2 = Image.open(img2_path).convert("RGBA")

arr1 = np.array(img1)
arr2 = np.array(img2)

h, w, _ = arr1.shape

mask = np.fromfunction(lambda y, x: x/w < 1 - y/h, (h, w), dtype=int)


result = np.where(mask[..., None], arr1, arr2)

result = result[:-2, :-2, :]

Image.fromarray(result).save(output_path)