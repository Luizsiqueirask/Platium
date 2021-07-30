<?php


namespace App\Http\Features;

class FileRegister
{
    /**
        Modes	Description
        r	    Open a file for read only. File pointer starts at the beginning of the file.
        w	    Open a file for write only. Erases the contents of the file or creates a new file if it doesn't exist.
                File pointer starts at the beginning of the file.
        a	    Open a file for write only. The existing data in file is preserved.
                File pointer starts at the end of the file. Creates a new file if the file doesn't exist.
        x	    Creates a new file for write only. Returns FALSE and an error if file already exists.

        r+	    Open a file for read/write. File pointer starts at the beginning of the file
        w+	    Open a file for read/write. Erases the contents of the file or creates a new file if it doesn't exist.
                File pointer starts at the beginning of the file.
        a+	    Open a file for read/write. The existing data in file is preserved.
                File pointer starts at the end of the file. Creates a new file if the file doesn't exist
        x+	    Creates a new file for read/write. Returns FALSE and an error if file already exists.


        operations        | r   r+   w   w+   a   a+
        ------------------|--------------------------
        read              | +   +        +        +
        write             |     +    +   +    +   +
        write after seek  |     +    +   +
        create            |          +   +    +   +
        truncate          |          +   +
        position at start | +   +    +   +
        position at end   |                   +   +
    **/

    /**
     * Display a listing of the resource.
     *
     * @param mixed $filename
     * @return void
     */
    public function reading_file(mixed $filename)
    {
        $path = "../database/jsons/";
        $json_file =  $filename . ".json";
        $uri = $path . $json_file;

        $file = fopen($uri, "r") or die("File can't open nor read!");
        fread($file, filesize($json_file));
        fclose($file);
    }

    /**
     * Display a listing of the resource.
     *
     * @param string $filename
     * @return void
     */
    public function reading_file_plus(string $filename)
    {
        $path = "../database/jsons/";
        $json_file =  $filename . ".json";
        $uri = $path . $json_file;

        $file = fopen($uri, "r+") or die("File can't open nor read!");
        while (!feof($file)) {
            fread($file, filesize($json_file));
        }
        fclose($file);
    }

    /**
     * Display a listing of the resource.
     *
     * @param string $filename
     * @param $data
     * @return void
     */
    public function writing_file(string $filename, $data)
    {
        $path = "../database/jsons/";
        $json_file =  $filename . ".json";
        $uri = $path . $json_file;

        $file = fopen($uri, "w") or die("File can't open nor read!");
        fwrite($file, $data);
        fclose($file);
    }

    /**
     * Display a listing of the resource.
     *
     * @param string $filename
     * @param mixed $data
     * @return void
     */
    public function writing_file_plus(string $filename, $data)
    {
        $path = "../database/jsons/";
        $json_file =  $filename . ".json";
        $uri = $path . $json_file;

        $file = fopen($uri, "w") or die("File can't open nor read!");
        fwrite($file, $data);
        fclose($file);
    }

    /**
     * Display a listing of the resource.
     *
     * @param string $filename
     * @param mixed $data
     * @return void
     */
    public function appending_file(string $filename, $data )
    {
        $path = "../database/jsons/";
        $json_file =  $filename . ".json";
        $uri = $path . $json_file;

        $file = fopen($uri, "a") or die("File can't open nor read!");
        fwrite($file, $data);
        fclose($file);    }

    /**
     * Display a listing of the resource.
     *
     * @param string $filename
     * @param $data
     * @return void
     */
    public function appending_file_plus(string $filename, $data)
    {
        $path = "../database/jsons/";
        $json_file =  $filename . ".json";
        $uri = $path . $json_file;

        $file = fopen($uri, "a+") or die("File can't open nor read!");
        fwrite($file, $data . "," . "\r\n");
        fclose($file);    }
}
