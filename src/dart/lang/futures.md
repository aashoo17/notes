# Futures

now dart is single threaded or based on isolate concept that is all the piece of code runs in a single isolate so code runs synchronously to make it non blocking we have an idea of futures

## event loop

future creation

future
    - success
    ```dart
    main(){
        call()
            .then((x){print(x);})
            .catchError((){print("error received");});
        }

        Future<int> call(){
        return Future.value(20);
        }
    ```
    - error
    ```dart
    main(){
        call()
            .then((x){print(x);})
            .catchError((){print("error received");});
        }

        Future<int> call(){
        return Future.error(throw 20);
    }
    ```

so futures run in isolates when we will run futures which completes asynchronously so isolate does not get completed until or unless all the futures are reached to sucess/error

```dart
main(){
    Future();
}
```
we may feel like from other programming languages that since main() does not have any code and possibly will complete before Future() even runs and Future() will not reach to completion

async await
marking a function async will automatically returns future  
await a future to make it to reach to completion