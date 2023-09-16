// # Problem: https://www.hackerrank.com/challenges/flipping-the-matrix
// # Haskell
import Data.Maybe
import Data.IORef
import qualified Data.ByteString.Char8 as B
import Control.Monad
import qualified Data.Vector as V

main :: IO ()
main = do
  rd <- intReader
  [q] <- rd 1
  replicateM_ q $ do
    [n] <- rd 1
    v <- fmap (V.fromList) $ rd (4 * n * n)
    let
      f x y = maximum [g x y, g x' y, g x' y', g x y']
        where
        x' = 2 * n - 1 - x
        y' = 2 * n - 1 - y
      g x y = v V.! (x + 2 * n * y)
    print $ sum $ [f x y | x <- [0..pred n], y <- [0..pred n]]
    

intReader :: IO (Int -> IO [Int])
intReader = do
  ws <- fmap ((concatMap B.words) . B.lines) B.getContents >>= newIORef
  return $ \n -> do
    xs <- readIORef ws
    writeIORef ws (drop n xs)
    return (take n . map (fst . fromJust . B.readInt) $ xs)