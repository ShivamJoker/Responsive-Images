filename="${1%.*}"

echo "Converting $filename into webp & avif"

postfix=$3

for ((i = 1 ; i <= 3 ; i++ ));
do
  size=$(($2*i))

  convert $1 -resize $size -quality 75 -define webp:lossless=true \
  -pointsize $(($size/10)) -fill white -gravity North -font Nourd-bold \
  -annotate +0+10 "${size}W   WEBP" -append $filename-${size}w.webp &

  convert $1 -resize $size -quality 75 -define avif:lossless=true \
  -pointsize $(($size/10)) -fill white -gravity North -font Nourd-bold \
  -annotate +0+10 "${size}W   AVIF" -append $filename-${size}w.avif &

done

wait
echo "Converted successfully"
